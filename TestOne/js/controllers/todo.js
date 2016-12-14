(function(){
  angular.module('FinalTest')
  .controller('TodoController', todoCtrl);

  function todoCtrl(Todo, items){
    var vm = this;

    vm.add = add;
    vm.remove = remove;

    vm.listItems = items;

    function add(){
      Todo.add(vm.myItem)
      .then(function(response){
        vm.myItem.id = response.data;
        vm.listItems.push(vm.myItem);
        console.log(vm.listItems);
        vm.myItem = {};
      });
    }
    function remove(id){
      Todo.remove(id)
      .then(function(response){
        for (var i = 0; i < vm.listItems.length; i++) {
          if (vm.listItems[i].id === id) {
            vm.listItems.splice(i, 1);
          }
        }
      });
    }
  }
})();
