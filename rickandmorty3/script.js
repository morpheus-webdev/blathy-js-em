const targetDiv = document.getElementById('target-div')
const proNav = document.getElementById('pro');
const baseUrl = "https://rickandmortyapi.com/api/character/";
let chars = [];
let page = 1;
let maxPage = -1;
function printChars(){
    targetDiv.innerHTML = "";
    chars.forEach((c) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('character');
        newDiv.innerHTML = `
            <h1>${c.name}</h1>
            <h2>${c.gender}</h2>
            <p>${c.location.name}</p>
            <img src=${c.image} />
        `
        targetDiv.appendChild(newDiv)
    });

}
async function loadPage(num) {
    let res = await fetch(`${baseUrl}?page=${num}`).
        then(data => data.json())
    chars = res.results;
    if(maxPage = -1){
        maxPage = res.info.pages
    }
    printChars();
    setDynamicPagination();
}

function prev(num){
    if(page <= 1){
        return;
    }
    else{
        page -= num;
        loadPage(page)
    }
}
function next(num){
    if(page >= maxPage){
        return;
    }
    else{
        page += num;
        loadPage(page);
    }

}

function setDynamicPagination(){
    proNav.innerHTML = `
        ${page >= 2 ? `<button onclick="prev(1)">&lt;</button>` : `<button disabled onclick="prev(1)">&lt;</button>`}
        ${page >= 3? `<button onclick="prev(2)">${page-2}</button>` : ``}
        ${page >= 2? `<button onclick="prev(1)">${page-1}</button>` : ``}
        <button style="font -weight: bold">${page}</button>
        ${page <= maxPage-1 ? `<button onclick="next(1)">${page+1}</button>` : ``}
        ${page <= maxPage-2 ? `<button onclick="next(2)">${page+2}</button>` : ``}
        ${page <= maxPage-1 ? `<button onclick="next(1)">&gt;</button>` : `<button disabled onclick="next(1)">&gt;</button>`}
    `
}

async function init(){
    await loadPage(1)
    
}

init();