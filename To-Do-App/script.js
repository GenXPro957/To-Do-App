const inputBox = document.getElementById('input-box');
const listcont = document.getElementById('list-container');
function addTask(){
    if(inputBox.value === '')
    {
        alert("Must write something!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listcont.addEventListener("click",function(e)
{
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN")
{
    e.target.parentElement.remove();
    savedata();
}
},false);

function savedata()
{
    localStorage.setItem("data",listcont.innerHTML);
}

function showlist(){
    listcont.innerHTML = localStorage.getItem("data");
}
showlist()
