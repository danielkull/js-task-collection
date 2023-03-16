const redSlider = document.querySelector("[name=red]");
const greenSlider = document.querySelector("[name=green]");
const blueSlider = document.querySelector("[name=blue]");
let colorPalette = document.body.style;

window.addEventListener("load", eventHandler);
redSlider.addEventListener("input", eventHandler);
greenSlider.addEventListener("input", eventHandler);
blueSlider.addEventListener("input", eventHandler);

function eventHandler(e) {
  document.body.style.cssText =
    "--main-bg-red: " +
    redSlider.value +
    ";" +
    "--main-bg-green: " +
    greenSlider.value +
    ";" +
    "--main-bg-blue: " +
    blueSlider.value;
  hexValueCalc(redSlider, greenSlider, blueSlider);
}

function hexValueCalc(redValue, greenValue, blueValue) {
  const r = redValue.value;
  const g = greenValue.value;
  const b = blueValue.value;

  let hexText = "#" + backupHexFunc(r) + backupHexFunc(g) + backupHexFunc(b);
  document.querySelector(".hexcolor").textContent = hexText;
}

function hexNumberToLetter(value) {
  switch (Number(value)) {
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    case 12:
      return "C";
      break;
    case 13:
      return "D";
      break;
    case 14:
      return "E";
      break;
    case 15:
      return "F";
      break;
  }
}

function backupHexFunc(value) {
  let hexFirstValue = 0;
  let hexSecondValue = 0;
  if (value >= 160) {
    let newHexValue = Math.floor(value / 16);
    if (newHexValue >= 10) {
      hexFirstValue = hexNumberToLetter(newHexValue);
    }

    let secHexValue = value - Math.floor(value / 16) * 16;
    if (secHexValue >= 10) {
      hexSecondValue = hexNumberToLetter(secHexValue);
    } else {
      hexSecondValue = secHexValue;
    }
  } else if (value < 10) {
    hexSecondValue = value;
  } else if (value >= 10 && value < 16) {
    hexSecondValue = hexNumberToLetter(value);
  } else if (value >= 16) {
    hexFirstValue = Math.floor(value / 16);
    let newHexValue = value - Math.floor(value / 16) * 16;
    if (newHexValue >= 10) {
      hexSecondValue = hexNumberToLetter(newHexValue);
    } else {
      hexSecondValue = newHexValue;
    }
  }
  return hexFirstValue + "" + hexSecondValue;
}
