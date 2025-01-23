const inputField = document.getElementById('input-field')
const targetTable = document.getElementById('target-table')
let allDeals = [];
let shownDeals = [];
const dealUrl = "https://www.cheapshark.com/api/1.0/deals";

function convertDiscount(s){
    return parseInt(s)
}

function printTable(){
    targetTable.innerHTML = ""
    shownDeals.forEach((d) => {
        const row = document.createElement('tr');
        row.classList.add('row');
        row.innerHTML = `
            <td style="width: 20%">
                <img src=${d.thumb} />
            </td>
            <td style="width: 70%">${d.title}</td>
            <td style="width: 10%" class="price">$${d.normalPrice}</td>
            <td style="width: 10%" class="discount price">-${convertDiscount(d.savings)}%</td>
            <td style="width: 10%" class="price">$${d.salePrice}</td>
            `
        targetTable.appendChild(row)
    })
}

async function loadDeals(){
    let res = await fetch(dealUrl).then(data => data.json());
    allDeals = res;
    shownDeals = allDeals;
}

function search(){
    const text = inputField.value.toLowerCase();
    shownDeals = allDeals.filter((d) => {
        return d.title.toLowerCase().includes(text);
    })
    console.log(shownDeals)
    printTable();
}

async function init(){
    await loadDeals();
    printTable();
}

init();

