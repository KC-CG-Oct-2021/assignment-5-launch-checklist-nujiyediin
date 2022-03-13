// Write your helper functions here!
require('isomorphic-fetch');






function validateInput(testInput) {
   if (testInput === "") {
       return "Empty";
   } else if(isNaN(testInput)) {
       return "Not a number";
   } else {
       return "Is a number";
   }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.querySelector(pilot);
    let copilotName = document.querySelector(copilot);
    let fuel = document.querySelector(fuelLevel);
    let cargoMass = document.querySelector(cargoLevel);
    
   


    if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
        alert("All fields are required.");
        return;
    }

   if (validateInput(pilotName.value) === "Is a number" || validateInput(copilotName.value) === "Is a number") {
       alert("Names cannot be numbers.");
       return;
       
   }

   if (validateInput(cargoMass.value) === "Not a number") {
       alert("You must enter a number for cargo mass.");
       return;
   }

   if (validateInput(fuel.value) === "Not a number") {
       alert("You must enter a number for fuel level.");
       return;
   }


   console.log(document.querySelector("#pilotStatus"));

    let pilotStatus = document.querySelector("#pilotStatus");
    pilotStatus.innerHTML = "Pilot " + pilotName.value + " Ready";

    let copilotStatus = document.querySelector("#copilotStatus");
    copilotStatus.innerHTML = "Copilot " + copilotName.value + " Ready";

    let faultyItems = document.querySelector("#faultyItems");

    let fuelStatus = document.querySelector("#fuelStatus");

    let launchStatus = document.querySelector("#launchStatus");



    if (fuel.value < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "There is not enough fuel for this journey.";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch.";
    }
    

    let cargoStatus = document.querySelector("#cargoStatus");

    if (cargoMass.value > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuel.value >= 10000 && cargoMass.value <= 10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green";
    }
   


}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        return response.json().then(function(json){
            return json;
            console.log('hello');
        })
    
    });

    return planetsReturned;

    
}

function pickPlanet(planets) {
    let randomNumber =  Math.floor(Math.random() * (planets.length));
    return planets[randomNumber];
    
}


function addDestinationInfo(pickedPlanet) {
    let name = pickedPlanet.name;
    let diameter = pickedPlanet.diameter;
    let star = pickedPlanet.star;
    let distance = pickedPlanet.distance;
    let imageURL = pickedPlanet.image;
    let moons = pickedPlanet.moons;
    
    let missionTarget = document.getElementById("missionTarget");
    
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageURL}">
    
    `;
    
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
