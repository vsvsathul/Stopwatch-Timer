let stopwatchInterval;
let timerInterval;
let stopwatchSeconds = 0;
let timerSeconds;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    stopStopwatch();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;

    const displayString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById("stopwatchDisplay").innerText = displayString;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function startTimer() {
    const timerInput = document.getElementById("timerInput").value;
    const [hours, minutes, seconds] = timerInput.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Invalid timer input. Please enter a valid time in the format hh:mm:ss");
        return;
    }

    timerSeconds = hours * 3600 + minutes * 60 + seconds;

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Timer expired!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    document.getElementById("timerInput").value = "";
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;

    const displayString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById("timerInput").value = displayString;
}
