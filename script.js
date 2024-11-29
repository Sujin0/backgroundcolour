const button = document.getElementById("changeColorButton");
const infoText = document.getElementById("infoText");

let colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#FF6347", "#40E0D0"];
let currentIndex = 0;

button.addEventListener("click", function() {
 
  document.body.style.backgroundColor = colors[currentIndex];
  

  currentIndex = (currentIndex + 1) % colors.length;

  
  infoText.style.animation = "fadeIn 1.5s forwards";

  button.style.animation = "colorPulse 1s forwards";
  
  setTimeout(() => {
    button.style.animation = "";
  }, 1000);
});
