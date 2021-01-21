let add = function(num1, num2) {
    return num1 + num2;
};

let subtract = function(num1, num2) {
    return num1 - num2;
};

let multiply = function(num1, num2) {
    return num1 * num2;
};

let divide = function(num1, num2) {
    if (num2 === 0) return 'Tell me you cappin dawg'
    return num1 / num2;
};

let operate = function(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    else if (operator === '-') return subtract(num1, num2);
    else if (operator === '*') return multiply(num1, num2);
    else if (operator === '/') return divide(num1, num2);
};

// Main

let num1 = '';
let num2 = '';
let operator = '';

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === 'operator') {
            // Set operator for calculation
            operator = document.getElementById(`${button.id}`).innerHTML;
            document.getElementById('display').innerHTML += document.getElementById(`${button.id}`).innerHTML;

        } else if (button.className === 'number') {
            // Set num1 or num2 depending on whether operator has been chosen or not
            if (operator === '') {
                num1 += document.getElementById(`${button.id}`).innerHTML;
                document.getElementById('display').innerHTML += document.getElementById(`${button.id}`).innerHTML;
            } else {
                num2 += document.getElementById(`${button.id}`).innerHTML;
                document.getElementById('display').innerHTML += document.getElementById(`${button.id}`).innerHTML;
            }

        } else if (button.className === 'decimal') {
            // Set decimal point in current number
            if (operator === '') {
                num1 += document.getElementById(`${button.id}`).innerHTML;
                document.getElementById('display').innerHTML += document.getElementById(`${button.id}`).innerHTML;
            } else {
                num2 += document.getElementById(`${button.id}`).innerHTML;
                document.getElementById('display').innerHTML += document.getElementById(`${button.id}`).innerHTML;
            }

        } else if (button.className === 'clear') {
            // Clears numbers and operator from calculator
            num1 = '';
            num2 = '';
            operator = '';
            document.getElementById('display').innerHTML = '';

        } else if (button.className === 'equals') {
            // Completes digit entry into calculator and solves
            num1 = Number(num1);
            num2 = Number(num2);
            let result = operate(operator, num1, num2);
            document.getElementById('display').innerHTML = `${result}`;
        }
    });
});