const FATTYGAINZ = 1000;
window.addEventListener('DOMContentLoaded', (event) => {
  const countInput = document.querySelector('#stocks');
  const priceInput = document.querySelector('#price');
  const calculateButton = document.querySelector('#calculate');

  const wealth = document.querySelector('#wealth');
  let countValue = 0;
  let priceValue = 0;

  countInput.addEventListener('input', handleCountInput);
  countInput.addEventListener('change', handleCountInput);
  priceInput.addEventListener('input', handlePriceInput);
  priceInput.addEventListener('change', handlePriceInput);
  calculateButton.addEventListener('click', calculateAll);
  calculateButton.addEventListener('touchstart', calculateAll);

  function calculateAll() {
    console.log('hi ');
    handleCountInput();
    handlePriceInput();
  }
  function handleCountInput(event) {
    let value = countInput.value;
    value = Number(value);
    countValue = value;
    handleGenericInput();
  }
  function handlePriceInput(event) {
    let value = priceInput.value;
    value = Number(value);
    priceValue = value;
    handleGenericInput();
  }
  function handleGenericInput(event) {
      const out = (countValue * FATTYGAINZ) - (countValue * priceValue);
      wealth.innerHTML = out;
  }
});
