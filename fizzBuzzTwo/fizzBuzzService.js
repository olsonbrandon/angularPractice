(function(){
  angular.module('FizzBuzz')
  .factory('FizzBuzzService', fizzBuzz);

  function fizzBuzz(){
    var service = {
      generate: generate
    };
    return service;

    function generate(){
      var elements = [];
      // {
      //   val: num or word,
      //   classes: circle and num, fizz, buzz or fizzbuzz
      // }
      for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          elements.push({
            val: 'FizzBuzz',
            classes: 'circle fizz-buzz'
          });
        }
        else if (i % 3 === 0) {
          elements.push({
            val: 'Fizz',
            classes: 'circle fizz'
          });
        }
        else if (i % 5 === 0) {
          elements.push({
            val: 'Buzz',
            classes: 'circle buzz'
          });
        }
        else {
          elements.push({
            val: i,
            classes: 'circle'
          });
        }
      }
      return elements;
    }
  }
})();
