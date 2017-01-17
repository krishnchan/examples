(function(angular) {
  'use strict';
angular.module('invoice1', [])
  .controller('InvoiceController', function InvoiceController() {
    this.rup = 1;

    this.inCurr = 'USD';
    this.currencies = ['USD', 'EUR', 'CNY'];
   // this.num = [1,2,3];
      
    this.total = function total() {
      if(this.inCurr == 'USD'){
        return this.rup/67.92;
      }
      if(this.inCurr == 'EUR'){
        return this.rup/72.74;
      }
      if(this.inCurr == 'CNY'){
        return this.rup/9.89;
      }
      
    };

  
  });
})(window.angular);
