const { body } = document;

function changeBackground(number) {
  const selectedClass = `background-${number}`;
  // If body hasn't class
  if (!body.className) {
    body.classList.add(selectedClass);
  } else {
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
}
