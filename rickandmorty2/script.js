const inputField = document.getElementById('inputField')
const targetDiv = document.getElementById('target-div')
const allLocations = [];
let shownLocations = []
const firstUrl = "https://rickandmortyapi.com/api/location"

function printLocations(){
    targetDiv.innerHTML = ""
    shownLocations.forEach((l) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("location");
        newDiv.innerHTML = `
            <h1>${l.name}</h1>
            <p>${l.type}</p>
            <p>${l.dimension}</p>
        `
        targetDiv.appendChild(newDiv);
    })
}

function loadLocations(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function (){
        const resObj = JSON.parse(this.responseText);
        allLocations.push(...resObj.results);
        if(resObj.info.next){
            loadLocations(resObj.info.next)
        }
        else{
            shownLocations = allLocations;
            printLocations()
        }
    }
    xhr.send();
}

function search(){
    const text = inputField.value.toLowerCase();
    shownLocations = allLocations.filter((l) => {
        return l.name.toLowerCase().includes(text);
    })
    printLocations();
}

function init(){
    loadLocations(firstUrl);
}

init()