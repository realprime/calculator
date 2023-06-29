

function parsing(num) {
    if (num.includes('.')) {
        return parseFloat(num);
    } else {
        return parseInt(num);
    }
}

function operate(operator, first_number, second_number) {
    if (operator === '+') {
        return add(first_number, second_number);
    } else if (operator === '-') {
        return subtract(first_number, second_number);
    } else if (operator === 'x') {
        return multiply(first_number, second_number);
    } else if (operator === '/') {
        return divide(first_number, second_number);
    }
}


function add(m, n) {
    return m + n;
}

function subtract(m, n) {
    return m - n;
}

function multiply(m, n) {
    x = m * n;
    console.log(x);
    return x;
}

function divide(m, n) {
    if (m === 0) {
        return 0;
    } else if (n === 0) {
        return `cannot divide by zero`;
    } else {
        return m / n;
    }
}

const expressionSection = document.querySelector('.expression');
const numbers = document.querySelectorAll('.num');
const dot = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');
const resultSection = document.querySelector('.result');
const allClear = document.querySelector('.ac');

allClear.addEventListener('click', () => {
    expressionSection.textContent = '';
    resVal = '';
    expression = '';
    operand1 = '';
    operand2 = '';
    op = '';
    opRes = '';
    resultSection.textContent = '';
})

let expression = '';
let resVal = ''
let operand1, op, operand2;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        const num = number.textContent;
        if (resVal.length <= 10) {
            expression += num;
            resVal += num;
            resultSection.textContent = resVal;
            expressionSection.textContent = expression;
        }
    })
})

dot.addEventListener('click', () => {
    if (!resVal.includes('.')) {
        expression += '.';
        resVal += '.'
        resultSection.textContent = resVal;
        expressionSection.textContent = expression;
    }
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operand1 && op) {
            operand2 = resVal;
            resVal = '';
            let opRes = operate(op, parsing(operand1), parsing(operand2)).toString();
            console.log(opRes);
            if (opRes.includes('divide')) {
                resultSection.textContent = "press 'AC'"
                expressionSection.textContent = opRes;
            } else {
                resultSection.textContent = roundToTenDigits(opRes);
                expression = `${roundToTenDigits(opRes)} ${operator.textContent} `
                expressionSection.textContent = expression;
                const opArr = expression.split(' ');
                operand1 = opArr[0];
                op = opArr[1];
            }

        } else {
            if (expression !== '') {
                operand1 = resVal;
                op = operator.textContent
                resVal = '';
                resultSection.textContent = resVal;
                expression += ' ' + op + ' ';
                expressionSection.textContent = expression;
            }
        }
    });
});


function roundToTenDigits(number) {
    number = Number(number)
    if (number >= 1e10 || number <= -1e10) {
        return number.toExponential(3)
    } else {
        return parseFloat(number.toFixed(10));
    }
}

const equalBtn = document.querySelector('.equal')

equalBtn.addEventListener('click', () => {
    if (operand1 && op) {
        operand2 = resVal;
        resVal = '';
        let opRes = operate(op, parsing(operand1), parsing(operand2)).toString();
        console.log(opRes);
        if (opRes.includes('divide')) {
            resultSection.textContent = "press 'AC'"
            expressionSection.textContent = opRes;
        } else {
            resultSection.textContent = roundToTenDigits(opRes);
            expression = `${roundToTenDigits(opRes)} ${op} `
            // expressionSection.textContent = expression;
            const opArr = expression.split(' ');
            operand1 = opArr[0];
            op = opArr[1];
        }
    }
})

//sync with equal to and operator button eval is pending