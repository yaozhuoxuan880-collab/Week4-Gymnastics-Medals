Papa.parse("gymnastics-medalists.csv", {
download: true,
header: true,
 
complete: function(results) {
 
const tableBody = document.getElementById("table-body");
 
results.data.forEach(row => {
 
if (row.Name) {
 
const tr = document.createElement("tr");
 
tr.innerHTML = `
<td>${row.Name}</td>
<td>${row.Age}</td>
<td>${row.Height}</td>
<td>${row.Weight}</td>
<td>${row.Team}</td>
<td>${row.Year}</td>
<td>${row.City}</td>
<td>${row.Medal}</td>
`;
 
tableBody.appendChild(tr);
}
});
}
});