// 1. Button Click
document.getElementById("changeBtn").addEventListener("click", function() {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "lightgreen";
});

// 2. Hover Effects
document.getElementById("changeBtn").addEventListener("mouseover", function() {
  this.style.transform = "scale(1.1)";
});
document.getElementById("changeBtn").addEventListener("mouseout", function() {
  this.style.transform = "scale(1)";
});

// 3. Keypress Detection
document.addEventListener("keydown", function(e) {
  console.log("Key pressed:", e.key);
});

// 4. Double-click (Bonus)
document.getElementById("changeBtn").addEventListener("dblclick", function() {
  alert("You double-clicked the button!");
});

// 5. Slideshow
const images = [
  "https://img.freepik.com/free-photo/nature-tranquil-beauty-reflected-calm-water-generative-ai_188544-12798.jpg?uid=R161016560&ga=GA1.1.352956758.1724983899&w=740",
  "https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?uid=R161016560&ga=GA1.1.352956758.1724983899&w=740",
  "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645903.jpg?uid=R161016560&ga=GA1.1.352956758.1724983899&w=740"
];
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideImage").src = images[currentIndex];
}, 2000);

// 6. Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById(`tab-${btn.dataset.tab}`).classList.remove("hidden");
  });
});

// 7. Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@") || password.length < 8) {
    alert("Please enter a valid email and password (min 8 characters)");
  } else {
    alert("Form submitted successfully!");
  }
});
