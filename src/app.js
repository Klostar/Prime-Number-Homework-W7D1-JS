const PrimeNumber = require('./models/prime_number.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view');


document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
