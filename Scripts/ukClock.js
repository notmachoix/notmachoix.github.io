function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;

  const now = new Date();
  const options = {
    timeZone: 'Europe/London',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  clock.textContent = "UK Time: " + now.toLocaleTimeString('en-GB', options);
}

setInterval(updateClock, 1000);
updateClock();
