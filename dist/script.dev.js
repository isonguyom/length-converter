"use strict";

// Length conversion
var result;
var convertBtn = document.getElementById("convertBtn");

var convert = function convert() {
  // Get from Unit
  var fromSelect = document.getElementById("fromSelect");
  var fromUnit = fromSelect.options[fromSelect.selectedIndex].text; // Get to unit

  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text; // Get from value

  var fromValue = document.getElementById("fromValue").value; // Get to value

  var toValue = document.getElementById("toValue"); // Calculate for meter conversion

  if (fromUnit == "Meter") {
    result = parseFloat(meter_to_(fromValue));
  } else if (fromUnit == "Kilometer") {
    //Kilometer conversion
    result = parseFloat(kilometer_to_(fromValue));
  }

  toValue.value = result;
  console.log(result + toUnit);
}; // CONVERSION CALCULATION
// Calculation for meter conversions


var meter_to_ = function meter_to_(m) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for kilometer conversions


var kilometer_to_ = function kilometer_to_(km) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = km * 1000;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = km;
  } else if (toUnit == "Mile") {
    //Mile
    result = km * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = km * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = km * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = km * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = km * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = km * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = km * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = km * 0.0005399568;
  }

  return result;
}; // Calculation for mile conversions


var mile_to_ = function mile_to_(mi) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = mi * 30000;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = mi * 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = mi;
  } else if (toUnit == "Inch") {
    //Inch
    result = mi * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = mi * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = mi * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = mi * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = mi * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = mi * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = mi * 0.0005399568;
  }

  return result;
}; // Calculation for inch conversions


var inch_to_ = function inch_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for foot conversions


var foot_to_ = function foot_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for yard conversions


var yard_to_ = function yard_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for rod conversions


var rod_to_ = function rod_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for chain conversions


var chain_to_ = function chain_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for furlong conversions


var furlong_to_ = function furlong_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
}; // Calculation for nautical mile conversions


var nauticalMile_to_ = function nauticalMile_to_() {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = m;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = m / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = m * 0.0005399568;
  }

  return result;
};

convertBtn.addEventListener("click", convert);