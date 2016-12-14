(function(){
    angular.module('FinalTest')
    .component('navBar',{
        templateUrl: 'js/components/navBar/navBar.html',
        bindings: {
            views: '<',
            currentView: '<',
            onClick: '&',
        },
        controller: function() {
            var vm = this;

            vm.viewClicked = viewClicked;

            function viewClicked(view){
                vm.onClick({
                    name: view.name
                });
            }
        }
    });
})();
