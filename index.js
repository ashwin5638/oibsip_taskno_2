const inputbox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddList(){
    if(inputbox.value === ""){
        alert("Enter Text")
    } else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = "";
    saveDate();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveDate();
     }
 }, false)

 function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 function showDate(){
    listContainer.innerHTML = localStorage.getItem("data")
 }
 showDate() 