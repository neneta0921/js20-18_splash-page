document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _checkPrevious(body) {
    // If body has class, check previous one
    const previousNumber = body.className.slice(-1);
    const previousClass = `background-${previousNumber}`;
    if (number === previousNumber) {
      body.classList.remove(selectedClass);
    } else {
      body.classList.remove(previousClass);
      body.classList.add(selectedClass);
    }
  }

  _changeBackground(number) {
    const { body } = document;
    const selectedClass = `background-${number}`;

    // If body hasn't class
    if (!body.className) {
      body.classList.add(selectedClass);
    } else {
      this._checkPrevious(body);
    }
  }

  _addEvent() {
    const background1 = document.querySelector('.background-1');
    const background2 = document.querySelector('.background-2');
    const background3 = document.querySelector('.background-3');

    background1.addEventListener('click', () => this._changeBackground(1));
    background2.addEventListener('click', () => this._changeBackground(2));
    background3.addEventListener('click', () => this._changeBackground(3));
  }
}
