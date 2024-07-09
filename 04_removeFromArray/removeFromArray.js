const removeFromArray = function(inputArray, ...elementsToRemove) {
    /*
    FOR each element in the input array
        FOR each element in the elements to remove array
            IF element is equal to an element to remove
                remove element from input array
            END IF
    END FOR 

    RETURN input array
    */

    for (let elemIndex = 0; elemIndex < inputArray.length; elemIndex++) {
        for (const elemToRemove of elementsToRemove) {
            if (inputArray[elemIndex] === elemToRemove) {
                inputArray.splice(elemIndex, 1);
                elemIndex--;
            }
        } 
        
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
