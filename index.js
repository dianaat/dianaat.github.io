// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("app started");

var myName = "Andreea";
var age = 23;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 40;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 31;
// console.info("My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Web Developer</span>";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe menu", id, e.target.matches("a"));
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills(skills) {
  var ul = document.querySelector("#skills ul");
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
  });
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (skills) {
      displaySkills(skills);
    });
}

loadSkills();

var count = 0;
var suma = "0";
