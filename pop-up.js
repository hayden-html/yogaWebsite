document.addEventListener("DOMContentLoaded", () => { // wait till all the DOM is Loaded, since querying objects at this point they are not there yet.
    const boxes = document.querySelectorAll(".boxes"); // or use getElementsBy...
    boxes.forEach(box => { // we are adding a click event listener to each box
      box.addEventListener('click', (e) => {
        const boxNumber = e.target.className.charAt(3); // through a regex we get the box number of the className
        const window = document.querySelector(`.window${boxNumber}`);
        // console.log(window);
        window.classList.remove('none');
          // do whatever you want with the popup, add a className or whatever to open it :)
      });
    })
    const back = document.querySelectorAll(".back");
    back.forEach(button => {
      button.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.classList.add('none');
      })
    })
    const background = document.querySelectorAll(".background");
    background.forEach(background => {
      background.addEventListener('click', (e) => {
        e.target.parentElement.classList.add('none');
      })
    })
  });