(function(){
    angular.module('FinalTest')
    .factory('Joke', joke);

    function joke($http){
      var service = {
        getJoke: getJoke
      };
      return service;

      function getJoke(){
        return $http.get('http://api.icndb.com/jokes/random');
      }
    }
})();
