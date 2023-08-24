'use strict';
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const light_mode = document.querySelector('.light-mode');
const dark_mode = document.querySelector('.dark-mode');
const icon = document.querySelectorAll('.icon');
const change_background = document.querySelectorAll('.btn');
const changeMode_color = document.querySelectorAll('.mode');
const mode_icon_color = function () {
  for (let i = 0; i < changeMode_color.length; i++) {
    changeMode_color[i].classList.add('black');
  }
};
const mode_icon_color_reset = function () {
  for (let i = 0; i < changeMode_color.length; i++) {
    changeMode_color[i].classList.remove('black');
  }
};
const background_change = function () {
  for (let i = 0; i < change_background.length; i++) {
    change_background[i].style.backgroundColor = 'transparent';
  }
};
const color_change = function () {
  for (let i = 0; i < icon.length; i++) {
    icon[i].classList.add('black');
  }
};
const color_reset = function () {
  for (let i = 0; i < icon.length; i++) {
    icon[i].classList.remove('black');
  }
};
function handlePercentageInput() {
  if (!currentInput) return;
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateScreen();
}
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.querySelector('.icon').textContent;
    handleButtonClick(buttonText);
  });
});
function handleButtonClick(value) {
  switch (value) {
    case 'AC':
      clearScreen();
      break;
    case '←':
      deleteLastCharacter();
      break;
    case '=':
      calculateResult();
      break;
    default:
      appendToScreen(value);
  }
}
function appendToScreen(value) {
  screen.value += value;
}
function clearScreen() {
  screen.value = '';
}
function deleteLastCharacter() {
  screen.value = screen.value.slice(0, -1);
}
function calculateResult() {
  try {
    const result = eval(screen.value);
    screen.value = result;
  } catch (error) {
    screen.value = 'Error';
  }
}

light_mode.addEventListener('click', function () {
  dark_mode.classList.remove('active');
  light_mode.classList.add('active');
  document.querySelector('body').style.backgroundColor = '#ced4da';
  color_change();
  document.querySelector('.calculator').style.backgroundColor = '#ddd';
  document.querySelector('.calculator').style.boxShadow =
    '0 3px 10px rgb(135 134 134)';
  document.querySelector('.screen').style.backgroundColor = '#bbb';
  document.querySelector('.header').style.borderBottom =
    '1px solid rgba(170 170 170 / 68%)';
  background_change();
  mode_icon_color();
});
dark_mode.addEventListener('click', function () {
  light_mode.classList.remove('active');
  dark_mode.classList.add('active');
  document.querySelector('body').style.backgroundColor = '#adb5bd';
  document.querySelector('.calculator').style.backgroundColor = '#000';
  document.querySelector('.calculator').style.boxShadow =
    '0 3px 10px 1.5px rgb(0 0 0 / 2.5)';
  document.querySelector('.header').style.borderBottom =
    'border-bottom: 1px solid rgb(170, 170, 170, 0.3)';
  color_reset();
  background_change();
  mode_icon_color_reset();
});
