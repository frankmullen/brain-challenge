angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })
    .controller('ModalController', function($scope, $uibModalInstance) {
        $scope.goback = function() {
            $uibModalInstance.close('goback');
        }
    })
    .controller('MemoryController', function($scope) {
       
        $scope.scoreBox = "Memory Score";
        
    })
    .controller('ConundrumController', function($scope) {
        
        $scope.scoreBox = "Conundrum Score";
        
    })
    .controller('BoardController', function($scope) {
       
        $scope.scoreBox = "BoardSwap Score"; 
        
    });
