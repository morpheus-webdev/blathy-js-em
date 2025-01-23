const inputField = document.getElementById('input-field')
const targetTable = document.getElementById('target-table')
const baseUrl = "https://www.cheapshark.com/api/1.0/games";
let games = []

function printTable(){
    targetTable.innerHTML = ""
    games.forEach((g) => {
        const row = document.createElement('tr');
        row.classList.add('row');
        row.innerHTML = `
            <td style="width: 20%">
                <img src=${g.thumb} />
            </td>
            <td style="width: 50%">${g.external}</td>
            <td style="width: 30%" class="price">$${g.cheapest}</td>
            `
        targetTable.appendChild(row)
    })
}

async function search(){
    const text = inputField.value.toLowerCase();
    let res = await fetch(`${baseUrl}?title=${text}`).then(data => data.json());
    games = res;
    printTable();
    console.log(res);
}