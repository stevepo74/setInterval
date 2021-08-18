setInterval()

setInterval(function, milliseconds)

const bubble = document.querySelector(".bubble");
const text = "Alert! 🚨";
const time = 5000;

function showAlert() {
  console.log("working");
}

setInterval(showAlert, time);



