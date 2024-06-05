// JavaScript for tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    btn.classList.add('active');
    tabPanes[index].classList.add('active');
  });
});

// Get the modal
var modal = document.getElementById("signupModal");
var signupBtn = document.querySelector(".cta button");
var closeBtn = document.getElementsByClassName("close")[0];

signupBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
var signupForm = document.querySelector("#signupModal form");
signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  signupForm.reset();
  modal.style.display = "none";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Scroll Indicator
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = scrollTop / scrollHeight * 100;
    scrollIndicator.style.width = `${progress}%`;
});

// Horizontal scroll handling
const reviewContainer = document.querySelector('.review-container');
let isDown = false;
let startX;
let scrollLeft;

reviewContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - reviewContainer.offsetLeft;
  scrollLeft = reviewContainer.scrollLeft;
});

reviewContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

reviewContainer.addEventListener('mouseup', () => {
  isDown = false;
});

reviewContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - reviewContainer.offsetLeft;
  const walk = (x - startX) * 2;
  reviewContainer.scrollLeft = scrollLeft - walk;
});
