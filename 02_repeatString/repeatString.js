const repeatString = function(string, num) {
    // checks whether number is negative
    if (num < 0) {
        return "ERROR";
    }
    let repeated = "";
    for (i = 1; i <= num; i++) {
        repeated += string;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
