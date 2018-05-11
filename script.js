var i = 1;

function addRow(){
    var table = document.getElementById('dynamic-table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Cell" + i;
    cell2.innerHTML = "Cell" + (i+1);
    i = i + 2;
}