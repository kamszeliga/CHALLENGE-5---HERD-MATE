var events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
},
{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
},
{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
},
{
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
},
{
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
},
{
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
},
{
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
},
{
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
},
{
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
},
];

function buildDropdown() {
    // get the dropdown menu from the page
    let dropdownMenu = document.getElementById('eventDropdown');
    // empty the innerHTML to ensure its clean
    dropdownMenu.innerHTML = '';

    // get our events
    let currEvents = events;

    // pull out just the city names
    let eventCities = currEvents.map((event) => event.city);
    // filter the cities to only distinct city names
    let distinctCities = [...new Set(eventCities)]

    // get the template from the page
    const template = document.getElementById('dropdownItemTemplate');

    // copy the template
    let dropdownTemplateNode = document.importNode(template.content, true);
    // get the <a> tag from the template copy
    let menuItem = dropdownTemplateNode.querySelector('a');
    // change the text
    menuItem.textContent = 'All Cities';
    menuItem.setAttribute('data-string', 'All');
    // add item to the page
    dropdownMenu.appendChild(dropdownTemplateNode);

    for (let index = 0; index < distinctCities.length; index++) {
        let cityMenuItem = document.importNode(template.content, true);
        let cityButton = cityMenuItem.querySelector('a');

        cityButton.textContent = distinctCities[index];
        cityButton.setAttribute('data-string', distinctCities[index]);

        dropdownMenu.appendChild(cityMenuItem);

    }
    displayStats(currEvents);

    displayEventData(currEvents);

}

function displayStats(eventsArray) {
    // let totalAttendance = calculateTotal(eventsArray);
    // let averageAttendance = calculateAverage(eventsArray);
    // let mostAttendance = calculateMost(eventsArray);
    // let leastAttendance = calculateMin(eventsArray);

    let stats = calculateStats(eventsArray);

    document.getElementById('total').textContent = stats.totalAttendance.toLocaleString("en-US", {maximumFractionDigits: 0, minimumFractionDigits: 0,} );
    document.getElementById('average').textContent = stats.averageAttendance.toLocaleString("en-US", {maximumFractionDigits: 0, minimumFractionDigits: 0,} );
    document.getElementById('most').textContent = stats.mostAttendance.toLocaleString("en-US", {maximumFractionDigits: 0, minimumFractionDigits: 0,} );
    document.getElementById('least').textContent = stats.leastAttendance.toLocaleString("en-US", {maximumFractionDigits: 0, minimumFractionDigits: 0,} );
}

function calculateStats(eventsArray){

    let sum = 0;
    let aver = 0;
    let max = eventsArray[0].attendance;
    let min = eventsArray[0].attendance;

    for (let index = 0; index < eventsArray.length; index++) {
        let currentEvent = eventsArray[index];
         sum = sum + currentEvent.attendance;

         if (currentEvent.attendance > max) {
            max = currentEvent.attendance;
        }

        if (currentEvent.attendance < min) {
            min = currentEvent.attendance;
        }
    }

    aver = sum / eventsArray.length;

    let stats = {
        totalAttendance: sum,
        averageAttendance: aver,
        mostAttendance: max,
        leastAttendance: min,
}
    return stats;   
}

function displayEventData (eventsArray){
    
    let tableBody = document.getElementById('eventTableBody');
    const tableRowTemplate = document.getElementById('eventTableRowTemplate');

    tableBody.innerHTML = '';

    for(let i = 0; i < eventsArray.length; i++) {
        
        let eventRow = document.importNode(tableRowTemplate.content, true)
        let currentEvent = eventsArray[i];

        let tableCells = eventRow.querySelectorAll("td")

        tableCells[0].textContent = currentEvent.event;
        tableCells[1].textContent = currentEvent.city;
        tableCells[2].textContent = currentEvent.state;
        tableCells[3].textContent = currentEvent.attendance;
        tableCells[4].textContent = currentEvent.date;
    
        tableBody.appendChild(eventRow); 
}    
}












// function calculateTotal(eventsArray) {

//     let sum = 0;

//     for (let index = 0; index < eventsArray.length; index++) {
//         let currentEvent = eventsArray[index];
//         sum = sum + currentEvent.attendance;
//     }

//     return sum;
// }

// function calculateAverage(eventsArray) {

//     let total = calculateTotal(eventsArray);
//     let aver = total / eventsArray.length;
//     // for (let index = 0; index < eventsArray.length; index++) {
//     //     let currentEvent = eventsArray[index];
//     //     sum = sum + currentEvent.attendance;
//     // }

//     // aver = sum / eventsArray.length;
//     return aver;
// }

// function calculateMost(eventsArray) {
//     let max = eventsArray[0].attendance;

//     for (let index = 0; index < eventsArray.length; index++) {
//         let currentEvent = eventsArray[index];

//         if (currentEvent.attendance > max) {
//         max = currentEvent.attendance;
//     }
// }
//     return max;

// }

// function calculateMin(eventsArray) {
//     let min = eventsArray[0].attendance;

//     for (let index = 0; index < eventsArray.length; index++) {
//         let currentEvent = eventsArray[index];

//         if (currentEvent.attendance < min) {
//         min = currentEvent.attendance;
//     }
// }
//     return min;

// }