const hoursHandler = document.querySelector(".hours");
const minutesHandler = document.querySelector(".minutes");
const secondsHandler = document.querySelector(".seconds");
const digitalTime = document.querySelector(".digital-clock");
logTime();
setInterval(logTime, 1000);

function logTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  settingClockHandlers(hours, minutes, seconds);
  if (seconds % 2) {
    digitalTime.textContent =
      addingZero(hours) + " " + addingZero(minutes) + " " + addingZero(seconds);
  } else {
    digitalTime.textContent =
      addingZero(hours) + ":" + addingZero(minutes) + ":" + addingZero(seconds);
  }
}

function addingZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function settingClockHandlers(hours, minutes, seconds) {
  const hoursHandlerPosition = hours * 30 - 180;
  const minutesHandlerPosition = minutes * 6 - 180;
  const secondsHandlerPosition = seconds * 6 - 180;
  document.body.style.cssText =
    "--hour-rotation: " +
    hoursHandlerPosition +
    "deg;" +
    "--minutes-rotation: " +
    minutesHandlerPosition +
    "deg;" +
    "--seconds-rotation: " +
    secondsHandlerPosition +
    "deg;";
}
