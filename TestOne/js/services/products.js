(function(){
    angular.module('FinalTest')
    .factory('Product', product);

    function product($http){
      var service = {
        getProduct: getProduct
      };
      return service;

      function getProduct(){
        return $http.get('https://wta-inventorybackend.herokuapp.com/api/v1/product');
      }
    }
})();
