function addTask(){

const input=document.getElementById("taskInput");

const li=document.createElement("li");

li.innerText=input.value;

document.getElementById("taskList").appendChild(li);

input.value="";
}
