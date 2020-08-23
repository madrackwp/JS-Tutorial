const text = document.querySelector("title");
const addListBtn = document.querySelector(".addListBtn");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");

// text.classList.remove("change");

// changeColor.addEventListener("click", function() {
//   text.classList.toggle("change");
// });

// for (user of userList) {
//   user.addEventListener("click", function() {
//     this.classList.toggle("change");
//   });
// }

console.log(listInput.value);

addListBtn.addEventListener("click", function() {
  //Create li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value into the li
  newLi.appendChild(liContent);
  //Attach the li to the userList
  userList.appendChild(newLi);
});
