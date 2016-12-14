 (function(){
    angular.module('FinalTest')
    .factory('Todo', todo);

    function todo($http){
        var service = {
            list: list,
            add: add,
            remove: remove
        };
        return service;

        function list(){
            return $http.get('http://secret-escarpment-99471.herokuapp.com/item');
        }
        function add(myItem){
            return $http.post('http://secret-escarpment-99471.herokuapp.com/item',myItem);
        }
        function remove(id){
            return $http.delete('http://secret-escarpment-99471.herokuapp.com/item/' + id);
        }
    }
})();
