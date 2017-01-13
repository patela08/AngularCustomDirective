(function (app) {
    app.module("app")
        .directive("address",addressDirective);

    function addressDirective() {

        var addDir = {
            templateUrl:"./view/addressDirectivetemp.html",
            restrict:"E",
            scope:true,
            bindToController: true,
            controller: function addressController() {
                var vm = this;
                vm.collapse = true;
                vm.collapsed = function collapseAddress(user){
                    vm.collapse = !vm.collapse;
                };
                vm.expand = function expand() {
                    vm.collapse = true;
                }
            },
            controllerAs: 'addctrl'
        };
        return addDir;
    };
})(angular);