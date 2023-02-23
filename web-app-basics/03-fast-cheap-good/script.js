// Selects all inputs from type checkbox in array form
const inputsCheck = document.querySelectorAll("input[type=checkbox]");
const activeCheckboxes = []; //Creats empty array for storing active checkboxes

// Iterates through array elements(inputs of type checkbox)
inputsCheck.forEach(function (checkbox) {
  // Active element is now checkbox
  checkbox.addEventListener("change", function () {
    //If current checkbox is "changed" do check

    if (checkbox.checked === true) {
      //Test if box is checked
      // Test for last activ checkbox: Compares amount of filled array with total inputs - 1
      if (activeCheckboxes.length >= inputsCheck.length - 1) {
        //Uncheckes previous checkbox
        activeCheckboxes[activeCheckboxes.length - 1].checked = false;
        //Also removes it
        activeCheckboxes.pop();
        //And add the current one instead
        activeCheckboxes.push(this);
      } else {
        //Not the last checkbox
        //Then just add it
        activeCheckboxes.push(this);
      }
    } else if (checkbox.checked === false) {
      //Test if box is unchecked
      activeCheckboxes.pop(); //Then also remove it from the array
    }
  });
});
