const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated',(event) => {
    const checkNumber = event.detail;
    this.displayResult(checkNumber);
  });
};

ResultView.prototype.displayResult = function (results) {
  const resultElement = document.querySelector('#result');
  if(results.isPrime === true){
    resultElement.textContent = `Yes ${results.number} is a prime number`;
  }
  else{
    resultElement.textContent = `No ${results.number} is not a prime number`;
  }
};


module.exports = ResultView;
