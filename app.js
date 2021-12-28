const texts = [" a web developer", "a web designer", "dog lover"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();

function togglePop() {
  document.getElementById("about").classList.toggle("active");
  // console.log("nice!");
}
function togglePortfolio() {
  document.getElementById("portfolio").classList.toggle("active");
  // console.log("nice portfolio!");
}

function toggleBlog() {
  document.getElementById("blog").classList.toggle("active");
  // console.log("nice portfolio!");
}

function toggleResume() {
  document.getElementById("resume").classList.toggle("active");
  // console.log("nice portfolio!");
}
