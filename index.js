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

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHomePage() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  document.getElementById("home").style.display = "block";
}

function showSkillsPage() {
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  document.getElementById("skills").style.display = "block";
}

function showProjectsPage() {
  hidePage("skills");
  hidePage("home");
  hidePage("languages");
  document.getElementById("projects").style.display = "block";
}

function showLanguagesPage() {
  hidePage("skills");
  hidePage("home");
  hidePage("projects");
  document.getElementById("languages").style.display = "block";
}

showHomePage();
