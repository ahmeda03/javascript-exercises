const palindromes = function (str) {
    let filteredStr = str.toLowerCase().replaceAll(" ", "").split("");
    filteredStr = filteredStr.filter((letter) => (letter !== "." && letter !== "," && 
                                                    letter !== "?" && letter !== "!"));
    filteredStr = filteredStr.join("");
    reversedWord = filteredStr.split("").reverse().join("");
    return filteredStr === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
