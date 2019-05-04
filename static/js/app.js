//create a variable for the data
const ufoData = data


//create submit button for the table filter on the homepage
const submit_button = d3.select("#submit-button")


//create a variable for the entry form on the report page
const entry_button = d3.select("#submit-entry")

//Create variables that hold states for the US and Canada and the shapes of the UFOs
const unitedStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
                      "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", 
                      "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const canadaStates = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"]


//Toggling countries toggles the available states



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
    let stateValue = stateELement.property("value")
    let countryValue = countryElement.property("value")
    let shapeValue = shapeElement.property("value")

    
    //filter the data by element value
    let filteredDate = ufoData
        .filter(sighting => { //filters on the date input
            sightingDate = Date.parse(sighting.datetime)
            inputDate = Date.parse(dateValue)  + 21600000
            return sightingDate == inputDate
            }
        )
        //.filter(sighting => sighting.shape === shapeValue) //filters on the shape input
    
    //filter on country selection
    

    
    
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