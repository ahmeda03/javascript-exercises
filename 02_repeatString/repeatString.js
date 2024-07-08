const repeatString = function(givenString, numOfRepetitions) {
    /*
    IF number of Repetitions is not negative THEN
        INIT output string
        FOR each iteration until number of repetitions
            concatenate given string to output string
        ENDFOR
        RETURN output string
    ELSE
        return "ERROR"
    ENDIF
    */

    if (numOfRepetitions >= 0) {
        let outputString = "";
        for (let i = 0; i < numOfRepetitions; i++) {
            outputString += givenString;
        }
    
        return outputString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
