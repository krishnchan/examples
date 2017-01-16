(function(angular) {
  'use strict';
angular.module('invoice1', [])
  .controller('InvoiceController', function InvoiceController() {
    this.qty = 1;
   
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 68,
      EUR: 72,
      CNY: 9.88
    };

    this.total = function total(outCurr) {
      return this.qty * this.usdToForeignRates[outCurr];
    };
   
    this.pay = function pay() {
      window.alert('Thanks!');
    };
  });
})(window.angular);
