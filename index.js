const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timer = document.getElementById("timer");
const resButton = document.getElementById("reset");

let interval;

let startingTime = 0;

const Timer = (startingTime) => {
  const hours = Math.floor(startingTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startingTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(startingTime % 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const startTimer = () => {
  interval = setInterval(() => {
    startingTime++;

    timer.textContent = Timer(startingTime);
  }, 1000);

  stopButton.disabled = false;
  startButton.disabled = true;
  resButton.disabled = false;
};
startButton.addEventListener("click", startTimer);

const stopTimer = () => {
  clearInterval(interval);

  stopButton.disabled = true;
  startButton.disabled = false;
};
stopButton.addEventListener("click", stopTimer);

const resTimer = () => {
  clearInterval(interval);

  startingTime = 0;
  timer.textContent = "00:00:00";
  stopButton.disabled = true;
  resButton.disabled = true;
  startButton.disabled = false;
};
resButton.addEventListener("click", resTimer);
