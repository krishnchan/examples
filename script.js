(function(angular) {
  'use strict';
  angular.module('add', [])
    .controller('Addnumbers', function Addnumbers() {
      this.first = 0;
      this.second = 0;
      this.total = function total() {
        return this.first * this.second;
      };
    })
})(window.angular);
