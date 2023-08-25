function calculateNumber(a, b) {
    let number1 = Math.round(a);
    let number2 = Math.round(b);
    let total = number1 + number2;

    return total;
}

module.exports = calculateNumber;