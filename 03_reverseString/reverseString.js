const reverseString = function(inputString) {
    /*
    INIT inputArr with inputString split at the characters
    INIT outputArr to empty array
    FOR each character starting at the end of the array
        append character to output array
    END FOR

    SET outputString to outputArray joined at the space characters
    RETURN outputString
    */

    let inputArr = inputString.split("");
    let outputArr = [];

    for (let i = inputArr.length - 1; i >= 0; i--) {
        outputArr.push(inputArr[i]);
    }

    let outputString = outputArr.join("");
    return outputString
};

// Do not edit below this line
module.exports = reverseString;
