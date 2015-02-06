/* Loading an array of data */
//var myApp = angular.module('myApp', []);
//myApp.controller('MyController', ['$scope', function($scope) {
//    $scope.artists = [
//        {
//            "name": "Barot Bellingham",
//            "shortname": "Barot_Bellingham",
//            "reknown": "Royal Academy of Painting and Sculpture",
//            "bio": "Barot has just finished his final year at the Royal Academy."
//        },
//        {
//            "name": "Jonathan G. Ferrar II",
//            "shortname": "Jonathan_Ferrar",
//            "reknown": "Artist to Watch in 2012",
//            "bio": "The Artist to Watch in 2012 by the London Review."
//        },
//        {
//            "name": "Hillary Hewitt Goldwynn-Post",
//            "shortname": "Hillary_Hewitt",
//            "reknown": "New York University",
//            "bio": "Hillary is a sophmore art sculpture student at New York University."
//        },
//        {
//            "name": "Hassum Harrod",
//            "reknown": "Art College in New Delhi",
//            "shortname": "Hassum_Harrod",
//            "bio": "The Art College in New Delhi has sponsored Hassum on scholarship."
//        }
//    ]
//}]);

/* Loading data.json using a service */
var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.artists.length - 1;
        }

        if ($routeParams.itemId < $scope.artists.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);