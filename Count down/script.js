// script.js

const countdown = () => {
  const targetDate = new Date("May 25, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = targetDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Update DOM
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Stop countdown when the target date is reached
  if (gap <= 0) {
    clearInterval(timerInterval);
    document.querySelector(".countdown-container h1").textContent =
      "Time's up!";
    document.querySelector(".timer").style.display = "none";
  }
};

// Update the countdown every second
const timerInterval = setInterval(countdown, 1000);

// Initial call
countdown();
