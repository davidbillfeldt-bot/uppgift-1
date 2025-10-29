let foo = 0;
let bar = 0;

const fooInput = document.getElementById('fooInput');
const barInput = document.getElementById('barInput');
const divideBtn = document.getElementById('divideBtn');
const resultEl = document.getElementById('result');

function syncVarsFromInputs() {
  foo = fooInput.value === '' ? 0 : Number(fooInput.value);
  bar = barInput.value === '' ? 0 : Number(barInput.value);
}

divideBtn.addEventListener('click', () => {
  console.log('divide');
  syncVarsFromInputs();
  const outcome = foo / bar;
  console.log('foo / bar =', outcome);


  resultEl.textContent = `Result: ${outcome}`;
});