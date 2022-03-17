let button_object = document.getElementById("button");
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
