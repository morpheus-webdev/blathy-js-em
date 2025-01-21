const firstUrl = "https://dragonball-api.com/api/characters"
const allCharacters = []
let shownCharacters = []
const inputField = document.getElementById("inputField")
const targetDiv = document.getElementById("target-div")
const affiliations = []
const buttonsDiv = document.getElementById("buttons")
function drawButtons(){
    affiliations.forEach((a) => {
        const newButton = document.createElement("button");
        newButton.innerText = a;
        newButton.addEventListener("click", function () {
            console.log(a);
            inputField.value = a;
            filterFn()
        });
        buttonsDiv.appendChild(newButton)
    })
}

function printCharacters(){
    targetDiv.innerHTML = "";
    shownCharacters.forEach((c) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("character");
        newDiv.innerHTML = `
            <h1>${c.name}</h1>
            <p>${c.affiliation}</p>
            <img src=${c.image} />
        `
        targetDiv.appendChild(newDiv)
    })
}

function loadCharacters(url){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        const resObj = JSON.parse(xhr.responseText);
        resObj.items.forEach((c) => {
            if(!affiliations.includes(c.affiliation)){
                affiliations.push(c.affiliation)
            }
            allCharacters.push(c)
        })
        
        if(resObj.links.next){
            loadCharacters(resObj.links.next)
        }
        else {
            shownCharacters = allCharacters;
            console.log(affiliations)
            drawButtons();
            printCharacters()
        }
    }
    xhr.send();
}


function init(){
    loadCharacters(firstUrl)
}

init();

function filterFn(){
    const searchText = inputField.value.toLowerCase();
    console.log(searchText)
    shownCharacters = allCharacters.filter((c) => {
        return c.affiliation.toLowerCase().includes(searchText);
    });
    console.log(shownCharacters)
    printCharacters();
}

inputField.addEventListener('input', filterFn)