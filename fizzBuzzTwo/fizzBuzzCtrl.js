(function(){
    angular.module('FizzBuzz')
    .controller('FizzBuzzController', fizzBuzzCtrl);

    function fizzBuzzCtrl(FizzBuzzService){
        var vm = this;
        // vm.generate = generate;
        vm.results = FizzBuzzService.generate();
        
        // function generate(){
        //     vm.results = FizzBuzzService.generate();
        // }
    }
})();
