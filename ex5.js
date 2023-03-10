const outputDiv = document.getElementById('output');

const table = document.createElement('table');

for (let i = 1; i <= 12; i++) {
  const row = document.createElement('tr');
  const cell = document.createElement('td');
  cell.innerText = i;
  cell.style.textAlign = 'center';
  
  if (i % 4 === 0) {
    cell.style.backgroundColor = 'blue';
  }
  
  row.appendChild(cell);
  table.appendChild(row);
}

outputDiv.appendChild(table);