const elWindow = document.querySelector(".window");
const elLightSwitch = document.querySelector(".light-switch");

elLightSwitch.addEventListener("click", buttonClick);

function buttonClick() {
  elWindow.classList.toggle("dark-window");
  this.classList.toggle("light-off");
}
