const leapYears = function(year) {
    //tests whether years that are divisible by 100 are divisible by 400, if true then leap year

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
