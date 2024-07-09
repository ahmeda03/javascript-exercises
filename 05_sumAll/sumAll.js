const sumAll = function(firstNum, secondNum) {
    /*
    
    IF firstNum OR secondNum is not numbers THEN
        RETURN "ERROR"
    END IF
    
    IF firstNum OR secondNum are negative THEN
        RETURN "ERROR"
    END IF 

    INIT result to 0
    INIT bottomNum and topNum to 0

    IF firstNum is greater than secondNum THEN
        SET topNum to value of firstNum
        SET bottomNum to value of secondNum
    ELSE
        SET bottomNum to value of firstNum
        SET topNum to value of secondNum
    END IF

    FOR number from bottomNum to topNum
        add current number to result
    END FOR

    RETURN result
    */

    if ((typeof firstNum !== "number") || (typeof secondNum !== "number")) {
        return "ERROR";
    } 
    
    if ((firstNum < 0) || (secondNum < 0)) {
        return "ERROR";
    }
    
    let result = 0;
    let bottomNum = topNum = 0;

    if (firstNum > secondNum) {
        topNum = firstNum;
        bottomNum = secondNum;
    } else {
        topNum = secondNum;
        bottomNum = firstNum;
    }

    for (let currNum = bottomNum; currNum <= topNum; currNum++) {
        result += currNum;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
