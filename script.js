const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const ampm = document.querySelector("#ampm"); // Add this in your HTML

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let session = "AM";

  if (hours >= 12) {
    session = "PM";
  }

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  ampm.innerHTML = session;

}, 1000); // 1000ms = 1s is enough for a clock



// const hrs = document.querySelector("#hrs")
// const min = document.querySelector("#min")
// const sec = document.querySelector("#sec")


// setInterval(() => {
//   let currentTime = new Date();
//   hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()
//   min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()
//   sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()

// }, 10);

