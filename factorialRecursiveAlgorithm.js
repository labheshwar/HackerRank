const factorialRecursiveAlgorithm = (n) => {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return n*factorialRecursiveAlgorithm(n-1)
    }
}

console.log(factorialRecursiveAlgorithm(5))