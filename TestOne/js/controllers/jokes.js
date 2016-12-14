(function(){
  angular.module('FinalTest')
  .controller('JokesController', jokesctrl)

  function jokesctrl(Joke, firstJoke){
    var vm = this;

    vm.joke = firstJoke;
  }
})();
