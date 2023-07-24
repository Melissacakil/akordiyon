// Section 1
var section1Button = document.getElementsByClassName("accordion")[0];
var section1Content = document.getElementsByClassName("panel")[0];

section1Button.addEventListener("click", function () {
  this.classList.toggle("active");
  if (section1Content.style.display === "block") {
    section1Content.style.display = "none";
  } else {
    section1Content.style.display = "block";
  }
});

// Section 2
var section2Button = document.getElementsByClassName("accordion")[1];
var section2Content = document.getElementsByClassName("panel")[1];

section2Button.addEventListener("click", function () {
  this.classList.toggle("active");
  if (section2Content.style.display === "block") {
    section2Content.style.display = "none";
  } else {
    section2Content.style.display = "block";
  }
});

// Section 3
var section3Button = document.getElementsByClassName("accordion")[2];
var section3Content = document.getElementsByClassName("panel")[2];

section3Button.addEventListener("click", function () {
  this.classList.toggle("active");
  if (section3Content.style.display === "block") {
    section3Content.style.display = "none";
  } else {
    section3Content.style.display = "block";
  }
});
