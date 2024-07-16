const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    
    let fib1 = 0, fib2 = 1;
    for (let i = 2; i <= n; i++) {
        let fib1Tmp = fib1;
        fib1 = fib2;
        fib2 = fib2 + fib1Tmp;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
