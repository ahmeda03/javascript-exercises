const leapYears = function(year) {
    /*
    IF year is divisible by 4 AND year is NOT divisible by 100 OR
       year is divisible by 100 AND year is divisible by 400 THEN
            RETURN true
    END IF

    RETURN false
    */

    if ((year % 4 === 0 && year % 100 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)) {
            return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
