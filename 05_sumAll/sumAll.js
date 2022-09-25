const sumAll = function(int1, int2) {
    // returns "ERROR" if negative number or non-number parameter
    if (
        (int1 < 0 || int2 < 0)
        || (!Number.isInteger(int1) || !Number.isInteger(int2))
    ) {
        return "ERROR";
    }
    // 
    else {
        // puts integers in an array and then sorts the array
        const numberArray = [int1, int2];
        numberArray.sort(function(a, b) {return a - b});
        //sums all integers from int1 to int2, inclusive
        let sum = 0
        for (num = numberArray[0]; num <= numberArray[1]; num++) {
            sum += num;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;



/*

first add all the numbers between int1 and int2 to an array
then sum of that array?











*/