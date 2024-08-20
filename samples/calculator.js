module.exports = function calculator(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if(b != 0){
                return a / b;
            } else {
                return 'Error: Division by zero';
            }
        case '*':
            return a * b;
        case '%':
            return a % b;
        default:
            return 'Error: Invalid operator';
    }
}