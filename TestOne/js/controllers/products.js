(function(){
  angular.module('FinalTest')
  .controller('ProductsController', productsCtrl);

  function productsCtrl(Product, products){
    var vm = this;

    vm.products = products;

  }
})();
