/*let button_object = document.getElementById("button");
let input_object = document.getElementById("input");
let div_object = document.getElementById("todos");
let count = 0;

button_object.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.setAttribute("key", count);
  paragraph.innerText = input_object.value;
  div_object.appendChild(paragraph);
  paragraph.addEventListener("click", () => {
    div_object.removeChild(paragraph);
  });
  count += 1;
});
*/

/*async function fetchtodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();
  let output = "";
  data.forEach((todo, index) => {
    output += `<p key="${index}" ><span class="task">${todo}</span></p>`;
  });
}
document.querySelector("#todos").innerHTML = output;
fetchtodos();*/

/*
async function getText(file, status) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
  part_data = myText;
  console.log(myText);
  let output = "";
}*/
let button_object_completed = document.getElementById("button-completed");
let button_object_pending = document.getElementById("button-pending");
button_object_completed.addEventListener("click", () => {
  document.querySelector(".display_tasks").innerHTML = "";
  getText("https://jsonplaceholder.typicode.com/todos");
  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    //console.log(myText);
    let output = "";
    myText.forEach((todo, index) => {
      if (todo.completed === true) {
        output += `<p key="${todo.userId}" >The task "${todo.title}" with Id.${todo.id} is Completed</p>`;
        document.querySelector(".display_tasks").innerHTML = output;
        //console.log(todo.title);
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////
button_object_pending.addEventListener("click", () => {
  document.querySelector(".display_tasks").innerHTML = "";
  getText("https://jsonplaceholder.typicode.com/todos");
  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    //console.log(myText);
    let output = "";
    myText.forEach((todo, index) => {
      if (todo.completed === false) {
        output += `<p key="${todo.userId}" >The task "${todo.title}" with Id.${todo.id} is Pending</p>`;
        document.querySelector(".display_tasks").innerHTML = output;
      }
    });
  }
});
/*
myText.forEach((todo, index) => {
  output += `<p key="${index.userId}" ><span class="task">${todo.id}==>${todo.completed}</span></p>`;
  document.getElementById("todos").innerHTML = output;
});*/
