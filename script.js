function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('digitalClock').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();
let stopwatchInterval;
let stopwatchTime = 0;
document.getElementById("startStopwatch").onclick = function() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 1000);
};
document.getElementById("stopStopwatch").onclick = function() {
  clearInterval(stopwatchInterval);
};
document.getElementById("resetStopwatch").onclick = function() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  updateStopwatchDisplay();
  document.getElementById("laps").innerHTML = "";
};
document.getElementById("lapStopwatch").onclick = function() {
  const lapItem = document.createElement("li");
  lapItem.textContent = "Lap: " + formatTime(stopwatchTime);
  document.getElementById("laps").appendChild(lapItem);
};
function updateStopwatchDisplay() {
  document.getElementById("stopwatchDisplay").innerText = formatTime(stopwatchTime);
}
function formatTime(timeInSeconds) {
  const hrs = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(timeInSeconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}
let timerInterval;
let timerTime = 0;
document.getElementById("startTimer").onclick = function() {
  const input = document.getElementById("timerInput").value;
  if (!input || input <= 0) {
    alert("Please enter valid seconds!");
    return;
  }
  timerTime = parseInt(input);
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerTime--;
    updateTimerDisplay();
    if (timerTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
};
document.getElementById("resetTimer").onclick = function() {
  clearInterval(timerInterval);
  timerTime = 0;
  updateTimerDisplay();
  document.getElementById("timerInput").value = "";
};
function updateTimerDisplay() {
  const mins = String(Math.floor(timerTime / 60)).padStart(2, '0');
  const secs = String(timerTime % 60).padStart(2, '0');
  document.getElementById("timerDisplay").innerText = `${mins}:${secs}`;
}
