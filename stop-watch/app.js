let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.querySelector("#displaytime");
let timer = null;
let lapTimes = [];
let lapCount = 0;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displaytime.innerHTML = h + ":" + m + ":" + s;

    // Add subtle pulse animation every second
    if (seconds % 2 === 0) {
        displaytime.classList.add('pulse');
        setTimeout(() => displaytime.classList.remove('pulse'), 500);
    }
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);

    // Enable lap button
    document.getElementById('lapBtn').style.opacity = '1';
    document.getElementById('lapBtn').style.cursor = 'pointer';
}

function watchStop() {
    clearInterval(timer);

    // Disable lap button when stopped
    document.getElementById('lapBtn').style.opacity = '0.5';
    document.getElementById('lapBtn').style.cursor = 'not-allowed';
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
    lapTimes = [];
    lapCount = 0;
    document.getElementById('lapList').innerHTML = '';

    // Disable lap button
    document.getElementById('lapBtn').style.opacity = '0.5';
    document.getElementById('lapBtn').style.cursor = 'not-allowed';
}

function recordLap() {
    if (timer === null) return; // Don't record if timer isn't running

    lapCount++;
    const lapTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    lapTimes.push({ lap: lapCount, time: lapTime });

    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.className = 'lap-item';
    lapItem.innerHTML = `
                <span class="lap-number">Lap ${lapCount}</span>
                <span class="lap-time">${lapTime}</span>
            `;

    // Add new lap at the top
    if (lapList.firstChild) {
        lapList.insertBefore(lapItem, lapList.firstChild);
    } else {
        lapList.appendChild(lapItem);
    }

    // Auto scroll to top
    document.getElementById('lapTimes').scrollTop = 0;
}

// Disable lap button initially
window.addEventListener('load', () => {
    document.getElementById('lapBtn').style.opacity = '0.5';
    document.getElementById('lapBtn').style.cursor = 'not-allowed';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ' ':
        case 's':
            e.preventDefault();
            if (timer === null) watchStart();
            else watchStop();
            break;
        case 'r':
            e.preventDefault();
            watchReset();
            break;
        case 'l':
            e.preventDefault();
            recordLap();
            break;
    }
});