(function () {    
    app.controller('mainController', mainController);
    // injecting DI
    mainController.$inject = ["$scope"];
    // controller block.
    function mainController ($scope) {
        // named function
        $scope.fetchData = fetchData;
        /** 
         * This function used to trigger on load of page,
         * which is used to assign the data to scope
         */
        function fetchData () {
            $scope.peopleRecords = peopleRecords;    
        }
    }
})();