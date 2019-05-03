//create a variable for the data
const ufoData = data

//create submit button for the table filter on the homepage
const submit_button = d3.select("#submit-button")

//create a variable for the entry form on the report page
const entry_button = d3.select("#submit-entry")

//clear table information



//create the event listener for the submission button on the home page
submit_button.on("click", function(){
    
    //prevent the page from refreshing
    d3.event.preventDefault()
    
    
    //select the input elements
    let dateElement = d3.select("#date-time-input")
    let cityElement = d3.select("#city-input")
    let stateELement = d3.select("#state-input")
    let countryElement = d3.select("#country-input")
    let shapeElement = d3.select("#shape-input")
    
    //get the values of the property of the input element
    let dateValue = dateElement.property("value")
    // console.log(dateValue)
    // console.log(typeof dateValue)
    // console.log(typeof Date.parse(dateValue))
    
    //filter the data by element value
    let filteredDate = ufoData.filter(sighting => {
        sightingDate = Date.parse(sighting.datetime)
        inputDate = Date.parse(dateValue)  + 21600000
        return sightingDate == inputDate
        }
    )
    console.log(filteredDate)
    
    //create the table
    let newTable = d3.select(".table").append('table')
    let newTheadrow = newTable.append('thead')
    let newTbody = newTable.append('tbody')
    
    //create the table headers
    headerArr = Object.keys(ufoData[0])
    console.log(headerArr)
    //create the table rows
    headerArr.forEach(
        e => {
            newTheadrow.append("th").text(e)
        })
    
    //add the data to the table
    filteredDate.forEach(
        obj => {
            row = newTbody.append("tr")
        
        Object.keys(obj).forEach(
        key => 
        {
            row.append("td").text(obj[key])
        }
        )
        }
    )
    
})