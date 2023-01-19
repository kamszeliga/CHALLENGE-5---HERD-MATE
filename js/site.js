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

}

function displayStats(eventsArray) {
    let totalAttendance = calculateTotal(eventsArray);
    let averageAttendance = calculateAverage(eventsArray);
    let mostAttendance = calculateMost(eventsArray);
    let leastAttendance = calculateMin(eventsArray);

    // insert math here

    document.getElementById('total').textContent = totalAttendance;
    document.getElementById('average').textContent = averageAttendance;
    document.getElementById('most').textContent = mostAttendance;
    document.getElementById('least').textContent = leastAttendance;
}

function calculateTotal(eventsArray) {

    let sum = 0;

    for (let index = 0; index < eventsArray.length; index++) {
        let currentEvent = eventsArray[index];
        sum = sum + currentEvent.attendance;
    }

    return sum;
}

function calculateAverage(eventsArray) {

    let total = calculateTotal(eventsArray);
    let aver = total / eventsArray.length;
    // for (let index = 0; index < eventsArray.length; index++) {
    //     let currentEvent = eventsArray[index];
    //     sum = sum + currentEvent.attendance;
    // }

    // aver = sum / eventsArray.length;
    return aver;
}

function calculateMost(eventsArray) {
    let max = eventsArray[0].attendance;

    for (let index = 0; index < eventsArray.length; index++) {
        let currentEvent = eventsArray[index];

        if (currentEvent.attendance > max) {
        max = currentEvent.attendance;
    }
}
    return max;

}

function calculateMin(eventsArray) {
    let min = eventsArray[0].attendance;

    for (let index = 0; index < eventsArray.length; index++) {
        let currentEvent = eventsArray[index];

        if (currentEvent.attendance < min) {
        min = currentEvent.attendance;
    }
}
    return min;

}