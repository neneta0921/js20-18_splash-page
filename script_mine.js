const { body } = document;

// let count = [];

function changeBackground(number) {

  // for (let i = 0; i < 1000; i++) {
  //   document.body.appendChild(document.createElement('div'));
  // }
  // count.push(new Array(100000).join("count"));

  const selectedClass = `background-${number}`;
  // If body hasn't class
  if (!body.className) {
    body.classList.add(selectedClass);
  } else {
    // If body has class, check previous one
    const previousNumber = body.className.slice(-1)
    const previousClass = `background-${previousNumber}`;
    if (number === previousNumber) {
        body.classList.remove(selectedClass);
      } else {
        body.classList.remove(previousClass);
        body.classList.add(selectedClass);
    }
  }
}