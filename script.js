const container = document.querySelector(".container");
const text = document.querySelector(".text");
const btnImage = document.querySelector(".btn-image");
const imageCont = document.querySelector(".image-container");
const video = document.querySelector(".video-container video");
const videoCont = document.querySelector(".video-container");
const pointer = document.querySelector(".pointer-container");
const stopVideoBtn = document.getElementById("myImg");

const startBtn  = document.querySelector('.start');
const resetBtn  = document.querySelector('.reset');



const totalTime = 16000;
const breatheInTime = totalTime / 4;
const breathOutTime = totalTime / 4;
const holdTime = totalTime / 4;
text.innerText = "Relax...";

const minutes      = document.querySelector('.minutes');
const seconds      = document.querySelector('.seconds');
let timerTime      = 00;
let isRunning      = false;
let interval;


// event listeners
stopVideoBtn.addEventListener("click", changeToImage);
startBtn.addEventListener('click', startBreath);
resetBtn.addEventListener('click', resetTimer);


function breathAnimation() {
  text.textContent = "Breathe In!";
  container.classList.add("grow");
  container.classList.remove("shrink");

  timer = setTimeout(() => {
    text.innerText = "Hold";
    container.classList.remove("paused");
    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.classList.add("shrink");
      container.classList.remove("grow");

      setTimeout(() => {
        text.innerText = "Hold";
      }, holdTime);
    }, breathOutTime);
  }, holdTime);

  roundInterval = setInterval(breathAnimation, totalTime);
}

function startBreath () {
   if (isRunning) return;
       isRunning = true;
       interval  = setInterval(incrementTimer, 1000);

    if (startBtn.innerHTML === "Start"){;
 
    text.innerText = "Relax...";
    video.classList.remove('paused')
    video.play();
    // If box one isn't already activated, add the class
    if (!pointer.classList.contains("activated")) {
      pointer.classList.add("activated");
      breathAnimation();
    }
    pointer.classList.toggle("paused");
    container.classList.toggle("paused");
  }
};


function incrementTimer() {
  timerTime++;

  const numOfMinutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfMinutes);
  seconds.innerText = pad(numOfSeconds);
}


function pad(number) {
  return (number < 10) ? '0' + number : number;
  // if (number < 10) {
  //   return '0' + number;
  // } else {
  //   return number;
  // }
}
/* 
function stopTimer() {

    clearInterval(roundInterval);
    clearTimeout(timer);
    container.classList.remove("shrink") || container.classList.remove("grow");
    pointer.classList.remove("activated");
    container.classList.toggle("paused");
    pointer.classList.toggle("paused");

    text.innerText = "Paused...";
    
    if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
    console.log('stop');
} */

function resetTimer() {
  

    clearInterval(roundInterval);
    clearTimeout(timer);
    container.classList.remove("shrink") || container.classList.remove("grow");
    pointer.classList.remove("activated");
    container.classList.toggle("paused");
    pointer.classList.toggle("paused");
    text.innerText = "Relax...";

    if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
  timerTime = 0;
  minutes.innerText = '00';
  seconds.innerText = '00';
  console.log('reset');
}

function changeToImage() {
  videoCont.classList.toggle("disappeared");
  imageCont.classList.toggle("shown");
  stopVideoBtn.src = "img/video.png";
}
