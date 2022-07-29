"use strict";

// Length conversion
var convertBtn = document.getElementById("convertBtn");

var convert = function convert() {
  // Get from Unit
  var fromSelect = document.getElementById("fromSelect");
  var fromUnit = fromSelect.options[fromSelect.selectedIndex].text; // Get to unit

  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text; // Get from value

  var fromValue = document.getElementById("fromValue").value; // Get to value

  var toValue = document.getElementById("toValue"); // updateFromValue()
  // updateFromUnit()
  // updateToValue()
  // updateToUnit()
  // Calculate for meter conversion

  if (fromUnit = "Meter") {
    if (toUnit == "Meter") {
      toValue.value = fromValue;
    }

    if (toUnit == "Kilometer") {
      toValue.value = fromValue / 1000;
    }
  } // Calculate for Kilometer conversion


  if (fromUnit = "Kilometer") {
    if (toUnit == "Meter") {
      toValue.value = fromValue * 1000;
    }

    if (toUnit == "Kilometer") {
      toValue.value = fromValue;
    }
  } // Calculate for Mile conversion


  if (fromUnit = "Mile") {} // Calculate for Inch conversion


  if (fromUnit = "Mile") {} // Calculate for Foot conversion


  if (fromUnit = "Mile") {} // Calculate for Yard conversion


  if (fromUnit = "Mile") {} // Calculate for Rod conversion


  if (fromUnit = "Mile") {} // Calculate for Chain conversion


  if (fromUnit = "Mile") {} // Calculate for Furlong conversion


  if (fromUnit = "Mile") {} // Calculate for Nautical Mile conversion


  if (fromUnit = "Mile") {}

  console.log(toValue.value + toUnit);
}; // let updateFromUnit = function () {
//     let fromSelect = document.getElementById("fromSelect")
//     let fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
//     console.log("From Unit: " + fromUnit)
//     return fromUnit // en
// }
// let updateToUnit = function () {
//     let toSelect = document.getElementById("toSelect")
//     let toUnit = toSelect.options[toSelect.selectedIndex].text;
//     console.log("To Unit: " + toUnit)
//     return toUnit // en
// }
// let updateFromValue = function () {
//     let fromValue = document.getElementById("fromValue").value
//     console.log("From Value: " + fromValue)
//     return fromValue
// }
// let updateToValue = function () {
//     let toValue = document.getElementById("toValue").value
//     console.log("To Value: " + toValue)
//     return toValue
// }
// let meter_to_ = function (m) {
//     let toSelect = document.getElementById("toSelect")
//     let toUnit = toSelect.options[toSelect.selectedIndex].text;
//     if (toUnit == "Meter") {
//         toValue = m
//     }
//     if (toUnit == "Kilometer") {
//         toValue = m / 1000
//     }
//     return toValue
// }


convertBtn.addEventListener("click", convert);