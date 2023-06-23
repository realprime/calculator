

function operate(first_number, second_number, operator){
    if(operator === '+'){
        return add(first_number, second_number);
    } else if(operator === '-'){
        return subtract(first_number, second_number);
    } else if(operator === '*'){
        return multiply(first_number, second_number);
    } else if(operator === '/'){
        return divide(first_number, second_number);
    }
}


function add(m, n){
    return m+n;
}

function subtract(m, n){
    return m-n;
}

function multiply(m, n){
    return m*n;
}

function divide(m, n){
    if(m === 0){
        return 0;
    } else if(n === 0){
        return `cannot divide by zero`;
    } else {
        return m/n;
    }
}

