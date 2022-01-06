window.onscroll = function () {
  myFunction();
};

let navBar = document.querySelector(".navBar");
let scrollBTN = document.querySelector(".scrollUpBtn");
function myFunction() {
  if (window.scrollY > 20) {
    // console.log("akfsadf");
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
  if (window.scrollY > 500) {
    scrollBTN.classList.add("show");
  } else {
    scrollBTN.classList.remove("show");
  }
}

scrollBTN.addEventListener("click", function () {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; // For Chrome, and firefox
});

var hamburgMenu = document.querySelector(".menuLinksBtn");
var hamburgToggle = document.querySelector(".navBar .menuLinks");
var hamburgClose = document.querySelector(".menuLinksBtn i");

hamburgMenu.addEventListener("click", function () {
  hamburgToggle.classList.toggle("active");
  hamburgClose.classList.toggle("active");
});

GitHubCalendar(".calendar", "vasukomuravelli", {
  responsive: true,
});

let typingText = document.getElementById("typingText");
const texts = [
  "I am a Aspiring Full Stack Developer.",
  "I Love Coding.",
  "I am Passionate about building things.",
  "I Love Problem Solving.",
  "I Love Exploring New Things.",
];
let currentText = [];
let isRemoving = false;
let End = false;
let i = 0;
let j = 0;

function loop() {
  End = false;
  typingText.innerHTML = currentText.join("");

  if (i < texts.length) {
    if (!isRemoving && j <= texts[i].length) {
      currentText.push(texts[i][j]);
      j++;
      typingText.innerHTML = currentText.join("");
    }

    if (isRemoving && j <= texts[i].length) {
      currentText.pop(texts[i][j]);
      j--;
      typingText.innerHTML = currentText.join("");
    }

    if (j == texts[i].length) {
      End = true;
      isRemoving = true;
    }

    if (isRemoving && j === 0) {
      currentText = [];
      isRemoving = false;
      i++;
      if (i === texts.length) {
        i = 0;
      }
    }
  }
  const speedUp = Math.random() * (50 - 20) + 20;
  const normalSpeed = Math.random() * (50 - 20) + 50;
  const time = End ? 1000 : isRemoving ? speedUp : normalSpeed;
  setTimeout(loop, time);
}
loop();

// $(document).ready(function () {
//     $("#profile__ripple").ripples({
//       resolution: 512,
//       dropRadius: 10,
//     });

// window.addEventListener("load", function () {
//   let homeRipple = document.getElementById("home");
//   homeRipple.ripples({
//     resolution: 512,
//     dropRadius: 10,
//   });
// });

//localStorage logic for dark darkMode
let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
const checkBox = document.querySelector("#checkbox");
checkBox.checked = darkMode;
console.log(darkMode, checkBox.checked);
if (darkMode) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

checkBox.addEventListener("change", () => {
  if (darkMode) {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(false));
    darkMode = false;
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", JSON.stringify(true));
    darkMode = true;
  }
});
