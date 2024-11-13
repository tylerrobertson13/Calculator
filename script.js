const calculator = {
    firstNumber: '0',
    operator: null,
    secondNumber: null,
}

const equationDisplay = document.getElementById('topDisplay');
const solutionDisplay = document.getElementById('bottomDisplay');



function updateDisplay(value) {
    if (calculator.operator === null) {
        if (calculator.firstNumber === '0') {
            calculator.firstNumber = value;
        } else {
            calculator.firstNumber += value;
        }
        equationDisplay.textContent = calculator.firstNumber;
    } else {

        if (calculator.secondNumber === null) {
            calculator.secondNumber = value;
        } else {
            calculator.secondNumber += value;
        }
        equationDisplay.textContent = `${calculator.firstNumber} ${calculator.operator} ${calculator.secondNumber}`;
    }

}

function addDecimal() {
    if (calculator.operator === null) {
        if (calculator.firstNumber === '0') {
            calculator.firstNumber = '0.';
        } else {
            calculator.firstNumber += '.';
        }
        equationDisplay.textContent = calculator.firstNumber;
    }
    else {
        if (calculator.secondNumber === null) {
            calculator.secondNumber = '0.';
        } else {
            calculator.secondNumber += '.'
        }
        equationDisplay.textContent = `${calculator.firstNumber} ${calculator.operator} ${calculator.secondNumber}`;
    }
}

function clearDisplay() {

    equationDisplay.textContent = '0';
    calculator.firstNumber = '0';
    calculator.operator = null;
    calculator.secondNumber = null;
    solutionDisplay.textContent = '';
}

function calculate() {
    if (calculator.secondNumber === null) {
        solutionDisplay.textContent = calculator.firstNumber;
    }
    else if (calculator.firstNumber && calculator.operator && calculator.secondNumber) {
        const num1 = parseFloat(calculator.firstNumber);
        const num2 = parseFloat(calculator.secondNumber);
        let answer;

        switch (calculator.operator) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case 'x':
                answer = num1 * num2;
                break;
            case '/':
                answer = num2 !== 0 ? num1 / num2 : 'Error';
                break;
        }
        if (typeof answer === 'number') {
            answer = parseFloat(answer.toFixed(5));
        }


        solutionDisplay.textContent = answer;
        calculator.firstNumber = answer.toString();
        calculator.operator = null;
        calculator.secondNumber = null;

    }
}




const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const zeroButton = document.getElementById('zero');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');


oneButton.addEventListener('click', () => updateDisplay('1'));
twoButton.addEventListener('click', () => updateDisplay('2'));
threeButton.addEventListener('click', () => updateDisplay('3'));
fourButton.addEventListener('click', () => updateDisplay('4'));
fiveButton.addEventListener('click', () => updateDisplay('5'));
sixButton.addEventListener('click', () => updateDisplay('6'));
sevenButton.addEventListener('click', () => updateDisplay('7'));
eightButton.addEventListener('click', () => updateDisplay('8'));
nineButton.addEventListener('click', () => updateDisplay('9'));
zeroButton.addEventListener('click', () => updateDisplay('0'));
clearButton.addEventListener('click', () => clearDisplay());
plusButton.addEventListener('click', () => addOperater('+'));
minusButton.addEventListener('click', () => addOperater('-'));
multiplyButton.addEventListener('click', () => addOperater('x'));
divideButton.addEventListener('click', () => addOperater('/'));
decimalButton.addEventListener('click', () => addDecimal());
equalsButton.addEventListener('click', () => calculate());

document.addEventListener('keypress', (e) => {
    console.log({ e })
    if (!isNaN(parseInt(e.key)) || e.key === '.') {
        updateDisplay(e.key);
    }
    if (['+', '-', 'x', '/'].includes(e.key)) {
        addOperater(e.key)
    }
    if (e.key === 'Enter') {
        calculate(); 
    }
    if (e.key === 'c') {
        clearDisplay();
    }
})

function addOperater(optr) {
    if (calculator.operator !== null) {
        return;
    }
    if (calculator.firstNumber !== '0') {

        equationDisplay.textContent = `${calculator.firstNumber} ${optr} `;
        calculator.operator = optr;
    }
}