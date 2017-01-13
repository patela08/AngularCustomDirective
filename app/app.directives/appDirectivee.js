(function (app) {

    app.module("app")
        .directive("myCustDirective",custDir);

    function custDir() {

        var dir={
            templateUrl:"./view/directivetemplate.html",
            restrict:"EA",
            scope: {
                us : '=person'
            },
            bindToController: true,
            controller: function($scope){
                var vm = this;
                vm.collapse = true;
                vm.collapsed = function collapsed(){
                    vm.collapse = !vm.collapse;
                };
                vm.expand = function expand(){
                    vm.collapse = true;
                }
                vm.knightMe = function knightMe(user) {
                    console.log(user);
                    user.rank = "KNIGHT";
                };

            },
            controllerAs:'ctrl1'

        }
        return dir;
    };

})(angular);