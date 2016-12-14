(function(){
  angular.module('FinalTest')
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
    .otherwise('/jokes');

    $stateProvider
    .state({
      name : 'jokes',
      url : '/jokes',
      templateUrl : 'views/jokes.html',
      controller : 'JokesController as jc',
      resolve: {
        firstJoke: function(Joke){
          return Joke.getJoke().then(function(result){
            return result.data.value.joke;
          });
        }
      }
    })
    .state({
      name : 'products',
      url : '/products',
      templateUrl : 'views/products.html',
      controller : 'ProductsController as pc',
      resolve : {
        products : function(Product){
          return Product.getProduct().then(function(result){
            return result.data;
          });
        }
      }
    })
    .state({
      name : 'toDo',
      url : '/toDo',
      templateUrl : 'views/todo.html',
      controller : 'TodoController as tc',
      resolve : {
        items : function(Todo){
          return Todo.list().then(function(result){
            return result.data;
          });
        }
      }
    });
  })
  .run(function($rootScope, $state) {
     $rootScope.routes = [
         {
             name:'jokes',
             label: 'Jokes'
         },
         {
             name: 'products',
             label: 'Products'
         },
         {
             name: 'toDo',
             label: 'To Do List'
         }
     ];
     $rootScope.stateGo = function(name){
         $state.go(name);
         $rootScope.currentView = name;
     }
  });
})();
