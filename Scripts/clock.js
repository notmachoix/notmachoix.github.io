function updateUKClock() {
    const clockElement = document.getElementById("uk-clock");
    if (!clockElement) return;

    const now = new Date();

    // Convert to UK time using locale and time zone
    const ukTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    clockElement.textContent = ukTime;
}

// Update clock every second
setInterval(updateUKClock, 1000);

// Initial call
updateUKClock();
