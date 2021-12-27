// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


// 1. Create a variable to keep track of all the filters as an object.
var filters = {};
// 3. Use this function to update the filters. 
function updateFilters() {
  
    // 4a. Save the element that was changed as a variable.
    let changedDate = d3.select("datetime");
    let changedCity = d3.select("city");
    let changedState = d3.select("state");
    let changedCountry = d3.select("country");
    let changedShape = d3.select("shape");
    //let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let dateValue =changedDate.property("value");
    console.log(dateValue)
    let cityValue=changedCity.property("value");
    console.log(cityValue)
    let stateValue=changedState.property("value");
    console.log(stateValue)
    let countryValue =changedCountry.property("value");
    console.log(countryValue)
    let shapeValue =changedShape.property("value");
    console.log(shapeValue)

    // 4c. Save the id of the filter that was changed as a variable.
    let filterIdDate= changedDate.attr("id");
    console.log(filterIdDate);
    let filterIdCity= changedCity.attr("id");
    console.log(filterIdCity)
    let filterIdState= changedState.attr("id");
    console.log(filterIdState)
    let filterIdCountry= changedCountry.attr("id");
    console.log(filterIdCountry)
    let filterIdShape= changedShape.attr("id");
    console.log(filterIdShape)

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  if (dateValue) {filters[filterIdDate]= dateValue}
  else{
    delete filters[filterIdDate];}
    
    if (cityValue) {filters[filterIdCity]= cityValue}
    else {
      delete filters[filterIdCity];}
    
      if (stateValue) {filters[filterIdState]= stateValue}
      else {
        delete filters[filterIdState];}
 
        if (countryValue) {filters[filterIdCountry]= countryValue}
        else {
          delete filters[filterIdCountry];}
 
          if (shapeValue) {filters[filterIdShape]= shapeValue}
          else {
            delete filters[filterIdShape];
          };
        
  

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
   
      }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData; 
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
  data.forEach(function (data)
     {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);})

      {
        filteredData = filteredData.filter(row => row.datetime === city);}

         {
          filteredData = filteredData.filter(row => row.datetime === state);}


           {
            filteredData = filteredData.filter(row => row.datetime === country);}

             {
              filteredData = filteredData.filter(row => row.datetime === shape);}

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("datetime").on("change", updateFilters);
  d3.selectAll("city").on("change", updateFilters);
  d3.selectAll("state").on("change", updateFilters);
  d3.selectAll("country").on("change", updateFilters);
  d3.selectAll("shape").on("change", updateFilters);
  //d3.selectAll("input").on("change", updateFilters);
  // Build the table when the page loads
  buildTable(tableData);
