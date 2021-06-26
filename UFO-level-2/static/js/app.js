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
    var country = d3.select("#country").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var shape = d3.select("#shape").property("value");

    // initialize filteredData
    var filteredData = tableData;

    // check that date field is valid
    if (date) {
        // if the date is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.datetime == date);
    }
    // filter for country
    if (country) {
        // if the country is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.country == country);
    }
    // filter for state
    if (state) {
        // if the state is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.state == state);
    }
    // filter for city
    if (city) {
        // if the city is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.city == city);
    }
    // filter for shape
    if (shape) {
        // if the shape is a non-null / non-empty value, apply the filter
        filteredData = filteredData.filter(row => row.shape == shape);
    }


    // rebuild table
    buildTable(filteredData);
}

// filter listener event
d3.selectAll("#filter-btn").on("click", filterData);

// initiate table build
buildTable(tableData);