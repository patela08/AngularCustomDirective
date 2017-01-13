(function (app) {
    app.module("app")
        .directive("removeFriend",removeFriend);

    function removeFriend() {
        var rmvfrd = {
            templateUrl:"./view/removeFriendDirectivetemp.html",
            restrict:"E",
            controller: function removeFriendController($scope){
                var vm = this;
                vm.confirmremove = false;
                vm.removeFriend = function removeFriend(){
                    vm.confirmremove = !vm.confirmremove;
                };

                vm.remove = function removeFriends(friend,idx) {
                    if(idx > -1){
                        friend.splice(idx,1);
                    }
                };

                vm.cancelRemove = function cancelRemove() {
                    vm.confirmremove = false;
                }

            },
            controllerAs: 'removefrd'

        };
        return rmvfrd;
    }
})(angular);
