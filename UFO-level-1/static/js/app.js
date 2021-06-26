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


buildTable(tableData);