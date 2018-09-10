const PubSub = require('../helpers/pub_sub.js');

const PrimeNumber = function(){

};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail
    const result = this.primeNumberChecker(inputtedNumber);
    console.log('result',result);
    PubSub.publish('PrimeNumber:result-calculated',result);

  });

};

PrimeNumber.prototype.primeNumberChecker = function(num) {
  if (num <= 1) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++){
      if(num % i === 0) return false;
    }
return true
};

module.exports = PrimeNumber;
