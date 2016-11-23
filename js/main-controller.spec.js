//To identify the controller - Test suite.
describe('mainController', function () {
    beforeEach(module('app'));
    var $controller;
    var $rootScope;
    var $scope;
    var mainController;
    // DI injection
    beforeEach(inject(function (
        _$controller_,
        _$rootScope_
    ) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        mainController = $controller('mainController', {
            $scope: $scope
        });
    }));
    // This is used to identify the length of peopleRecords should be greater than zero.
    it('mainController function', function () {
        // negative case - to check peopleRecords record is defined or not.
        expect($scope.peopleRecords).toBeUndefined();
        $scope.fetchData();
        expect($scope.peopleRecords.length > 0).toBe(true);        
    });
    
});