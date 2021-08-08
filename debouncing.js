let inputbox1 = document.getElementById('inputbox1');
let inputbox2 = document.getElementById('inputbox2');

let writebox1 = document.getElementById('writeinput1');
let writebox2 = document.getElementById('writeinput2');

/*************With Debouce  *********/
let timeinterval;
function debounce(func, delay, event) {
  if (timeinterval) clearInterval(timeinterval);

  timeinterval = setTimeout(function() {
    func(event);
  }, delay);
}

inputbox1.addEventListener('keyup', function(event) {
  debounce(writeInDiv1, 2000, event);
});

function writeInDiv1(event) {
  console.log('Debounce : inside writeInDiv1');
  writebox1.innerHTML = event.target.value;
}

/************************************************* */

/***********Without Debounce */

inputbox2.addEventListener('keyup', function() {
  writeInDiv2(event);
});

function writeInDiv2(event) {
  console.log('Without Debouce : Inside writeInDiv2');
  writebox2.innerHTML = event.target.value;
}
