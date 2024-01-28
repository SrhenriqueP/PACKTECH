var endpoint = 'https://script.google.com/macros/s/AKfycbw4JxJeJky0W9eiK1fU8brSeIcf82YHOL0pjNuFsVM3r0lDBrcYKdm7vW1FtHa0MPY/exec?jhs=1';
fetch(endpoint)
.then(response => {
response.json()
.then(
data => {
setTableData(data.data);
console.log(data.data.length);
})
})
.catch(error => {
console.log(error);
})
function setTableData(data){
var table = document.getElementById('myTable')
for (var i = 0; i < data.length; i++){
var row = `<tr id=jh>
<td style="text-align: center;" ><img src="${data[i].url}" width="80" height="80"></td>
<td style="text-align: center;" >${data[i].versao} ✓</td>
<td style="text-align: center;" >${formatDate(data[i].data)}</td>
</tr>`
table.innerHTML += row
}
}
function formatDate(date) {
var d = new Date(date),
month = '' + (d.getMonth() + 1),
day = '' + d.getDate(),
year = d.getFullYear();
if (month.length < 2) 
month = '0' + month;
if (day.length < 2) 
day = '0' + day;
return [day, month,year ].join('/');
}

function infoTools(){
var result = document.querySelector('div.result');
if(result.style.display === 'block') {
result.style.display = 'none'; } 
else {
result.style.display = 'block';
}}