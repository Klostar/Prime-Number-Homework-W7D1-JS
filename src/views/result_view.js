const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated',(event) => {
    const checkNumber = event.detail;
    this.displayResult(checkNumber);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  // console.log('result', result);
};


module.exports = ResultView;
