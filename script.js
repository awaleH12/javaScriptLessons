
myName = "Hassan awale"

console.log("Welcome to EVC!");

// pay bill
// nine digit format
phone = "612101520";

if (phone.length == 9) {
    if (phone.charAt(0) == 6 || phone.charAt(0) == 7) {
        if (phone.charAt(1) == 1 || phone.charAt(1) == 2 || phone.charAt(1) == 7) {
            console.log("correct format");
        } else {
            console.log("wrong format");
        }
    } else {
        console.log("correct format");
    }
} else {
    console.log("wrong format");
}

// ten digit format
phone = "0612101520";

if (phone.length == 10) {
    if (phone.charAt(0) == 0 && phone.charAt(1) == 6) {
        if (phone.charAt(2) == 1 || phone.charAt(2) == 2) {
            console.log("correct format");
        } else {
            console.log("wrong format");
        }
    } else {
            console.log("wrong format");
        }
} else {
            console.log("wrong format");
        }