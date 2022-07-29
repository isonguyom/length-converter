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

  var toValue = document.getElementById("toValue"); // CHECK FOR THE RIGHT CONVERSION TO BE DONE 

  if (fromUnit == "Meter") {
    //Meter conversion
    result = parseFloat(meter_to_(fromValue));
  } else if (fromUnit == "Kilometer") {
    //Kilometer conversion
    result = parseFloat(kilometer_to_(fromValue));
  } else if (fromUnit == "Mile") {
    //Mile conversion
    result = parseFloat(mile_to_(fromValue));
  } else if (fromUnit == "Inch") {
    //Inch conversion
    result = parseFloat(inch_to_(fromValue));
  } else if (fromUnit == "Foot") {
    //Foot conversion
    result = parseFloat(foot_to_(fromValue));
  } else if (fromUnit == "Yard") {
    //Yard conversion
    result = parseFloat(yard_to_(fromValue));
  } else if (fromUnit == "Rod") {
    //Rod conversion
    result = parseFloat(rod_to_(fromValue));
  } else if (fromUnit == "Chain") {
    //Chain conversion
    result = parseFloat(chain_to_(fromValue));
  } else if (fromUnit == "Furlong") {
    //Furlong conversion
    result = parseFloat(furlong_to_(fromValue));
  } else if (fromUnit == "Nautical Mile") {
    //Nautical mile conversion
    result = parseFloat(nauticalMile_to_(fromValue));
  }

  toValue.value = result;
  console.log(result + toUnit);
}; // CONVERSION CALCULATIONS
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


var inch_to_ = function inch_to_(inch) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = inch / 39.370079;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = inch / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = inch * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = inch;
  } else if (toUnit == "Foot") {
    //Foot
    result = inch * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = inch * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = inch * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = inch * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = inch * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = inch * 0.0005399568;
  }

  return result;
}; // Calculation for foot conversions


var foot_to_ = function foot_to_(ft) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = ft / 3.28084;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = ft / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = ft * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = ft * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = ft;
  } else if (toUnit == "Yard") {
    //Yard
    result = ft * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = ft * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = ft * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = ft * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = ft * 0.0005399568;
  }

  return result;
}; // Calculation for yard conversions


var yard_to_ = function yard_to_(yd) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = yd / 1.093613;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = yd / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = yd * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = yd * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = yd * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = yd;
  } else if (toUnit == "Rod") {
    //Rod
    result = yd * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = yd * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = yd * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = yd * 0.0005399568;
  }

  return result;
}; // Calculation for rod conversions


var rod_to_ = function rod_to_(rod) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = rod / 0.1988387815;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = rod / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = rod * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = rod * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = rod * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = rod * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = rod;
  } else if (toUnit == "Chain") {
    //Chain
    result = rod * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = rod * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = rod * 0.0005399568;
  }

  return result;
}; // Calculation for chain conversions


var chain_to_ = function chain_to_(ch) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = ch / 0.0497096954;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = ch / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = ch * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = ch * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = ch * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = ch * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = ch * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = ch;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = ch * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = ch * 0.0005399568;
  }

  return result;
}; // Calculation for furlong conversions


var furlong_to_ = function furlong_to_(fur) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = fur / 0.0049709695;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = fur / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = fur * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = fur * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = fur * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = fur * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = fur * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = fur * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = fur;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = fur * 0.0005399568;
  }

  return result;
}; // Calculation for nautical mile conversions


var nauticalMile_to_ = function nauticalMile_to_(nmi) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;

  if (toUnit == "Meter") {
    //Meter
    result = nmi / 0.0005399568;
  } else if (toUnit == "Kilometer") {
    //Kilometer
    result = nmi / 1000;
  } else if (toUnit == "Mile") {
    //Mile
    result = nmi * 0.000621;
  } else if (toUnit == "Inch") {
    //Inch
    result = nmi * 39.370079;
  } else if (toUnit == "Foot") {
    //Foot
    result = nmi * 3.28084;
  } else if (toUnit == "Yard") {
    //Yard
    result = nmi * 1.093613;
  } else if (toUnit == "Rod") {
    //Rod
    result = nmi * 0.1988387815;
  } else if (toUnit == "Chain") {
    //Chain
    result = nmi * 0.0497096954;
  } else if (toUnit == "Furlong") {
    //Furlong
    result = nmi * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    //Nautical Mile
    result = nmi;
  }

  return result;
};

convertBtn.addEventListener("click", convert);