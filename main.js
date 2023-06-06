const keys = document.querySelectorAll('.key')

const display_input = document.querySelector('.display .input')

const display_output = document.querySelector('.display .output')

function handleButtonClick(event) {
const clickedButton = event.target;
const buttonValue = clickedButton.textContent

if (!isNaN(buttonValue) || (buttonValue === '.' && !display_input.textContent.includes('.'))) {
display_input.textContent += buttonValue;
} else if (buttonValue === 'AC') {
display_input.textContent = '';
display_output.textContent = '';
} else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '/' || buttonValue === '*' || buttonValue === '%' || buttonValue === '(' || buttonValue === ')') {
display_input.textContent += ' ' + buttonValue + ' ';
} else if (buttonValue === '=') {
const expression = display_input.textContent;
const result = eval(expression);
display_output.textContent = result;
display_input.textContent = result;
} else if (buttonValue === '<') {
const input = document.querySelector('.display .input')
const val = input.value;
input.value = val.slice(0, -1);
} else if (buttonValue === '(') {
display_input.textContent += '(';
} else if (buttonValue === ')') {
display_input.textContent += ')';
}
}

keys.forEach(function (key) {
key.addEventListener('click', handleButtonClick);
});