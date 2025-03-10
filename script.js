let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const startPauseBtn = document.getElementById("startPause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

// Start or Pause Timer
function startPauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        startPauseBtn.style.background = "#28a745";
    } else {
        timer = setInterval(updateTime, 10);
        startPauseBtn.textContent = "Pause";
        startPauseBtn.style.background = "#ffc107";
    }
    isRunning = !isRunning;
}

// Update Stopwatch Time
function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
    millisecondsEl.textContent = milliseconds < 100 ? "0" + milliseconds : milliseconds;
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "00";
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.background = "#28a745";
    lapsContainer.innerHTML = "";
}

// Add Lap
function addLap() {
    if (!isRunning) return;

    const lapItem = document.createElement("li");
    lapItem.textContent = $;{minutesEl.textContent};{secondsEl.textContent};{millisecondsEl.textContent};
    lapsContainer.appendChild(lapItem);
}

// Event Listeners
startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);