let select = document.getElementById("flex");
let box2 = document.getElementById("box2");

select.addEventListener("change", () => {
  if (select.value === "Flex") {
    box2.style.flex = " 2 3 500px";
  } else if (select.value === "none") {
    box2.style.flex = "0 0 0px";
  }
});
