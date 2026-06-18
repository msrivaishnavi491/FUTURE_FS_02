function addLead(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let source = document.getElementById("source").value;
let status = document.getElementById("status").value;
let notes = document.getElementById("notes").value;

let row =
"<tr><td>"+name+
"</td><td>"+email+
"</td><td>"+source+
"</td><td>"+status+
"</td><td>"+notes+
"</td></tr>";

document.getElementById("tableData").innerHTML += row;

}