const container = document.querySelector(".container");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const pointer = document.querySelector(".pointer-container");

const totalTime = 16000;
const breatheInTime = totalTime / 4;
const breathOutTime = totalTime / 4;
const holdTime = totalTime / 4;
text.innerText = "Relax...";

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

button.onclick = function () {
  if (button.innerHTML === "Start") {
    button.innerHTML = "STOP";
    text.innerText = "Relax...";

    // If box one isn't already activated, add the class
    if (!pointer.classList.contains("activated")) {
      pointer.classList.add("activated");
      breathAnimation();
    }
    pointer.classList.toggle("paused");
    container.classList.toggle("paused");
  } else {
    button.innerHTML === "STOP";
    button.innerHTML = "Start";
    clearInterval(roundInterval);
    clearTimeout(timer);
    container.classList.remove("shrink") || container.classList.remove("grow");
    pointer.classList.remove("activated");
    container.classList.toggle("paused");
    pointer.classList.toggle("paused");

    text.innerText = "Paused...";
  }
};
