// Length conversion



let convertBtn = document.getElementById("convertBtn")


let convert = function () {

    // Get from Unit
    let fromSelect = document.getElementById("fromSelect")
    let fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
    // Get to unit
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;
    // Get from value
    let fromValue = document.getElementById("fromValue").value
    // Get to value
    let toValue = document.getElementById("toValue")

    let result

    // updateFromValue()
    // updateFromUnit()


    // updateToValue()
    // updateToUnit()


    // Calculate for meter conversion
    if (fromUnit == "Meter") {

        if (toUnit == "Meter") { //Meter

            result = fromValue
        }

        if (toUnit == "Kilometer") { //Kilometer

            result = fromValue / 1000
        }

        if (toUnit == "Mile") { //Mile

            result = fromValue * 0.000621
        }

        if (toUnit == "Inch") { //Inch

            result = fromValue * 39.370079
        }

        if (toUnit == "Foot") { //Foot

            result = fromValue * 3.28084
        }

        if (toUnit == "Yard") { //Yard

            result = fromValue * 1.093613
        }

        if (toUnit == "Rod") { //Rod

            result = fromValue * 0.1988387815
        }

        if (toUnit == "Chain") { //Chain

            result = fromValue * 0.0497096954
        }

        if (toUnit == "Furlong") { //Furlong

            result = fromValue * 0.0049709695
        }

        if (toUnit == "Nautical Mile") { //Nautical Mile

            result = fromValue * 0.0005399568
        }

    } else if (fromUnit == "Kilometer") { //Kilometer conversion
        
        if (toUnit == "Meter") { //Meter

            result = fromValue * 1000
        }

        if (toUnit == "Kilometer") { //Kilometer

            result = fromValue
        }

    }


    // Calculate for Kilometer conversion
    // if (fromUnit = "Kilometer") {
    //     if (toUnit == "Meter") {

    //         result = fromValue * 1000
    //     }

    //     if (toUnit == "Kilometer") {

    //         result = fromValue
    //     }
    // }



    toValue.value = result
    console.log(result + toUnit)
}


// let updateFromUnit = function () {
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



convertBtn.addEventListener("click", convert)