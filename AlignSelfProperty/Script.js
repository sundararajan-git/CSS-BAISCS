let select = document.getElementById("alignself");
let box2 = document.getElementById("box2");
let box7 = document.getElementById("box7");
let box10 = document.getElementById("box10");

select.addEventListener("change", () => {
  if (select.value === "flex-start") {
    box2.style.alignSelf = "flex-start";
  } else if (select.value === "flex-end") {
    box7.style.alignSelf = "flex-end";
  } else if (select.value === "center") {
    box10.style.alignSelf = "center";
  }
});
