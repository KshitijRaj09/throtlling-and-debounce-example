let button1 = document.getElementById('button1');

let writeinput3 = document.getElementById('writeinput3');

let writeinput4 = document.getElementById('writeinput4');

let timeinterval1;
let actualbuttonClicked = 0;
let throtllingbuttonClicked = 0;
button1.addEventListener('click', function() {
  throtllingFunc(writeWithThrotle, 2000, event);
});

function throtllingFunc(func, delay, event) {
  actualbuttonClicked++;
  writeinput4.innerHTML = `Actual button clicked : ${actualbuttonClicked}`; //Display Actual Button click
  if (timeinterval1) {
    return;
  }
  timeinterval1 = setTimeout(function() {
    func(event);
    timeinterval1 = undefined;
  }, delay);
}

function writeWithThrotle(event) {
  throtllingbuttonClicked++;
  writeinput3.innerHTML = `With throtlling button Clicked : ${throtllingbuttonClicked}`; //Display button click with help of throtlling
}
