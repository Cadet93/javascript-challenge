// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

//variable for table body to add rows to
var tbody = d3.select("tbody");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

//event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Use d3 to update each cell's text with
//Sighting values (date/time, city, state, country, shape, comment)
tableData.forEach(function (ufosightings) {
  console.log(ufosightings);
  var row = tbody.append("tr");
  Object.entries(ufosightings).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufosightings object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  //d3.event.preventDefault();

  // remove any children from the list to
  tbody.html("");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  //Sighting values (date/time, city, state, country, shape, comment)
  filteredData.forEach(function (filteredsightings) {
    console.log(filteredsightings);
    var row = tbody.append("tr");
    Object.entries(filteredsightings).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufosightings object
      var cell = row.append("td");
      cell.text(value);
    });
  });

};




