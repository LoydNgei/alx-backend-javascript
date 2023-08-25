function calculateNumber(type, a, b) {
    let number1 = Math.round(a);
    let number2 = Math.round(b);

    if (type === 'SUM') {
        return number1 + number2;
    } else if (type === 'SUBTRACT') {
        return (number1 - number2);
    } else if (type === 'DIVIDE') {
        if (number2 === 0) {
            return 'Error'
        } else {
            return number1/number2;
        }
    };
}

module.exports = calculateNumber;