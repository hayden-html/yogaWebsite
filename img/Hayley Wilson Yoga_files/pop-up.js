document.addEventListener("DOMContentLoaded", () => { // wait till all the DOM is Loaded, since querying objects at this point they are not there yet.
    const boxes = document.querySelectorAll(".boxes"); // or use getElementsBy...
    const background = document.getElementById("background");
    boxes.forEach(box => { // we are adding a click event listener to each box
      box.addEventListener('click', (e) => {
        const boxNumber = e.target.className.charAt(3); // through a regex we get the box number of the className
        const popup = document.querySelector(`.popup${boxNumber}`);
        console.log(popup);
        background.classList.remove('none');
        popup.classList.remove('none');
        // do whatever you want with the popup, add a className or whatever to open it :)
      });
    });
  });