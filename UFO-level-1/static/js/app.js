// reference data file
var tableData = data;

// locate table object
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing table data
    tbody.html('');

    // build html table
    data.forEach((dataRow) => {
        // add row
        var row = tbody.append("tr");

        // add values
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// filter data based on date
function filterData() {

    // get date filter value
    var date = d3.select("#datetime").property("value");

    // initialize filteredData
    var filteredData = tableData;

    // check that date field is valid
    if (date) {
        // if the date is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.datetime == date);
    }

    // rebuild table
    buildTable(filteredData);
}

// filter listener event


buildTable(tableData);