const generateBtn = document.querySelector(".generate-btn");
const saveBtn = document.querySelector(".save-btn");
const mainColorList = document.querySelector("main");
const addUl = mainColorList.appendChild(document.createElement("ul"));

const couletteState = {
  hexColor: [],
};

let currentHexValue = "";

// Null Check einfügen

const createColorListElm = function (hexText) {
  const listText = document.createTextNode(hexText);
  const addLi = addUl.appendChild(document.createElement("li"));
  addLi.appendChild(listText);
  addLi.style.backgroundColor = hexText;
  const addDeleteBtn = addLi.appendChild(document.createElement("button"));
  addDeleteBtn.innerText = "Delete Color";
};

const loadState = function () {
  const dataFromStorage = localStorage.getItem("couletteState");
  if (dataFromStorage !== null) {
    couletteState.hexColor = JSON.parse(dataFromStorage).hexColor;
  }
  for (let i = 0; i < couletteState.hexColor.length; i++) {
    createColorListElm(couletteState.hexColor[i]);
  }
};

// Create each time a random color
window.onload = () => {
  generateBgColor();
  loadState();
};

// Manage Button handling
generateBtn.addEventListener("click", generateBgColor);
saveBtn.addEventListener("click", saveBgColor);

if (mainColorList) {
  mainColorList.addEventListener("click", deleteListElement);
}

// Create Random Hex Color and change Header with text.
function generateBgColor() {
  const hexColorText = document.querySelector(".hex-color-text");
  const headerBgColor = document.querySelector("header");
  const red = randomValue();
  const green = randomValue();
  const blue = randomValue();
  headerBgColor.style = `background-color: rgb(${red}, ${green}, ${blue})`;
  hexColorText.innerText = currentHexValue = colorToHex(red, green, blue);
  saveBtn.toggleAttribute("disabled", ""); //Toggles Button to be not disabled
}

// Turn given random numbers to single Hex values in UpperCase and return combined value.
function colorToHex(r, g, b) {
  const hexRed = r.toString(16).toUpperCase();
  const hexGreen = g.toString(16).toUpperCase();
  const hexBlue = b.toString(16).toUpperCase();
  return `#${hexNeedZero(hexRed)}${hexNeedZero(hexGreen)}${hexNeedZero(
    hexBlue
  )}`;
}

// Checks if given Hex Value has only one letter, if yes then add 0, else return unchanged
const hexNeedZero = function (string) {
  return string.length === 1 ? "0" + string : string;
};

// Create new List element with Hex number and delete Button
function saveBgColor() {
  couletteState.hexColor.push(currentHexValue);
  const lastIndex = couletteState.hexColor[couletteState.hexColor.length - 1];
  saveBtn.setAttribute("disabled", "");
  createColorListElm(lastIndex);
  updateState();
}

// Creates Random Value from 0 to 255
function randomValue() {
  return Math.floor(Math.random() * 256);
}

// State Object einfügen und Farbe speichern (Abrufen für Header und Hex Wert) später auch Listenelemente mit jeweiliger Farbe (auch zum Abrufen)

function updateState() {
  const dataForStorage = JSON.stringify(couletteState);
  localStorage.setItem("couletteState", dataForStorage);
}

// Deletes Li element and update State
function deleteListElement(e) {
  const ulItems = mainColorList.querySelector("ul");
  if (e.target.localName === "button") {
    const target = e.target.parentElement;
    const targetName = target.childNodes[0].nodeValue;
    ulItems.removeChild(target);
    couletteState.hexColor.forEach((el, i) => {
      if (targetName === el) {
        couletteState.hexColor.splice(i, 1);
        updateState();
      }
    });
  }
}
