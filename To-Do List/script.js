const inputBox=document.querySelector("#input-box");             // //fetch the input-box from html file
const listContainer = document.querySelector("#list-container"); //fetch the list-container from html file

function addTask(){
    if(inputBox.value ===''){
        alert("You must enter some value!!");
    }
    else{
        let li = document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveTasks();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // toggle checked class
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        // remove parent li
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Save data into localStorage
function saveTasks() {
  localStorage.setItem("Tasks", listContainer.innerHTML);
}

// Load data from localStorage
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("Tasks");
}

// Call showTasks when page loads
showTasks();