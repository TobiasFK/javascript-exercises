const removeFromArray = function(...args) {
    const array = args[0];
    const checkedArray = [];
    array.forEach((number) => {
        if (!args.includes(number)) {
            checkedArray.push(number);
        }
    });
    return checkedArray;
}


// Do not edit below this line
module.exports = removeFromArray;