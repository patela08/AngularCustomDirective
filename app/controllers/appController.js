(function (app) {

    app.module("app")
        .controller("myCtrl",userInfo);

    function userInfo() {
        var vm = this;
        vm.user = {
            name:"Akshar",
            address:{
                street:"135 Correja AVE",
                City: "Iselin",
                state: "New Jersey"
            },
            friends : [
                "Sheel",
                "Parth" ,
                "SId"
            ]
        };
        vm.user1 = {
            name:"Sheel",
            address:{
                street:"135 Correja AVE",
                City: "Iselin",
                state: "New Jersey"
            },
            friends : [
                "Akshar",
                "Parth" ,
                "SId"
            ]
        };
        vm.user2 = {
            name:"Parth",
            address:{
                street:"135 Correja AVE",
                City: "Iselin",
                state: "New Jersey"
            },
            friends : [
                "Sheel",
                "Akshar" ,
                "SId"
            ]
        };
        vm.user3 = {
            name:"Sid",
            address:{
                street:"135 Correja AVE",
                City: "Iselin",
                state: "New Jersey"
            },
            friends : [
                "Sheel",
                "Parth" ,
                "Akshar"
            ]
        }
    }

})(angular);