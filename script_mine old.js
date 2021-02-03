const body = document.querySelector('.wrapper');

function changeBackground(number) {
  const selectedBackground = `background-${number}`;
  const classNumbers = body.classList.length;

  if (classNumbers === 1) {
    body.classList.add(selectedBackground);
  } else if (classNumbers === 2) {
    const currentNumber = body.classList[1].slice(-1)
    const currentClass = `background-${currentNumber}`;
    if (number === currentNumber) {
        body.classList.remove(selectedBackground);
      } else {
        body.classList.remove(currentClass);
        body.classList.add(selectedBackground);
    }
  }
}