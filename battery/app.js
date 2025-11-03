// Battery API is only available in secure contexts (HTTPS)
// For demo purposes, we'll simulate battery data

document.addEventListener('DOMContentLoaded', function () {
    const batteryLevel = document.getElementById('battery-level');
    const batteryPercentage = document.getElementById('battery-percentage');
    const levelValue = document.getElementById('level-value');
    const chargingStatus = document.getElementById('charging-status');
    const chargingTime = document.getElementById('charging-time');
    const dischargingTime = document.getElementById('discharging-time');
    const batteryHealth = document.getElementById('battery-health');
    const refreshBtn = document.getElementById('refresh-btn');
    const simulateBtn = document.getElementById('simulate-btn');
    const historyChart = document.getElementById('history-chart');

    let batteryLevelValue = 50;
    let isCharging = false;
    let batteryHistory = [];

    // Initialize history chart
    function initializeHistoryChart() {
        historyChart.innerHTML = '';
        for (let i = 0; i < 20; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = '0px';
            historyChart.appendChild(bar);
        }
        // Generate some initial history
        for (let i = 0; i < 20; i++) {
            batteryHistory.push(Math.max(10, Math.min(100, batteryLevelValue + Math.random() * 20 - 10)));
        }
        updateHistoryChart();
    }

    // Update history chart
    function updateHistoryChart() {
        const bars = document.querySelectorAll('.bar');
        for (let i = 0; i < bars.length; i++) {
            if (i < batteryHistory.length) {
                bars[i].style.height = `${batteryHistory[i] * 1.2}px`;
            }
        }
    }

    // Update battery display
    function updateBatteryDisplay() {
        batteryLevel.style.width = `${batteryLevelValue}%`;
        batteryPercentage.textContent = `${Math.round(batteryLevelValue)}%`;
        levelValue.textContent = `${Math.round(batteryLevelValue)}%`;

        // Update gradient based on battery level
        if (batteryLevelValue < 20) {
            batteryLevel.style.background = 'linear-gradient(to right, #ff0000, #ff4d4d)';
        } else if (batteryLevelValue < 50) {
            batteryLevel.style.background = 'linear-gradient(to right, #ff4d4d, #ffff00)';
        } else {
            batteryLevel.style.background = 'linear-gradient(to right, #ffff00, #00ff00)';
        }

        // Update charging status
        if (isCharging) {
            chargingStatus.textContent = "Charging...";
            chargingStatus.className = "charging-status charging";

            // Calculate charging time
            const minutesToFull = Math.round((100 - batteryLevelValue) * 0.8);
            const hours = Math.floor(minutesToFull / 60);
            const minutes = minutesToFull % 60;
            chargingTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            dischargingTime.textContent = "--:--";
        } else {
            chargingStatus.textContent = "Not Charging";
            chargingStatus.className = "charging-status not-charging";

            // Calculate discharging time
            const minutesToEmpty = Math.round(batteryLevelValue * 1.2);
            const hours = Math.floor(minutesToEmpty / 60);
            const minutes = minutesToEmpty % 60;
            dischargingTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            chargingTime.textContent = "--:--";
        }

        // Update battery health (simulated)
        batteryHealth.textContent = `${Math.max(80, 100 - Math.floor(Math.random() * 10))}%`;

        // Update history
        batteryHistory.push(batteryLevelValue);
        if (batteryHistory.length > 20) {
            batteryHistory.shift();
        }
        updateHistoryChart();
    }

    // Simulate battery changes
    function simulateBattery() {
        if (isCharging) {
            batteryLevelValue = Math.min(100, batteryLevelValue + 1);
            if (batteryLevelValue === 100) {
                isCharging = false;
            }
        } else {
            batteryLevelValue = Math.max(0, batteryLevelValue - 0.5);
            if (batteryLevelValue === 0) {
                isCharging = true;
            }
        }
        updateBatteryDisplay();
    }

    // Try to get real battery information if available
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            batteryLevelValue = battery.level * 100;
            isCharging = battery.charging;

            updateBatteryDisplay();

            battery.addEventListener('chargingchange', function () {
                isCharging = battery.charging;
                updateBatteryDisplay();
            });

            battery.addEventListener('levelchange', function () {
                batteryLevelValue = battery.level * 100;
                updateBatteryDisplay();
            });
        });
    } else {
        // Fallback to simulated battery
        updateBatteryDisplay();
        setInterval(simulateBattery, 2000);
    }

    // Button event listeners
    refreshBtn.addEventListener('click', function () {
        if ('getBattery' in navigator) {
            navigator.getBattery().then(function (battery) {
                batteryLevelValue = battery.level * 100;
                isCharging = battery.charging;
                updateBatteryDisplay();
            });
        }
    });

    simulateBtn.addEventListener('click', function () {
        isCharging = !isCharging;
        updateBatteryDisplay();
    });

    // Initialize the app
    initializeHistoryChart();
});