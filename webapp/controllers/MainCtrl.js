angular.module('MainCtrl', [
    
    
]).controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.isContacts = function () {
        return window.location.href.indexOf('contacts') != -1;
    };
    $scope.prices = PRICES;
    console.log('$scope in MainController', $scope);

    if ($scope.isContacts() && google){
        function displayMap() {

            var mapOptions = {

                center: new google.maps.LatLng(49.785260, 30.098028),

                zoom: 16,

                mapTypeId: google.maps.MapTypeId.ROADMAP

            };

            var mapObject = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

            var marker = new google.maps.Marker({
                position: mapOptions.center,
                title:"Дымоходы"
            });


            // To add the marker to the map, call setMap();
            marker.setMap(mapObject);
            
            var infoWindow = new google.maps.InfoWindow({
                content: "Дымоходы Белая Церковь"
            }).open(mapObject, marker);
            
            google.maps.event.addListener(marker, "click", function (e) { 
                debugger
                infoWindow.open(mapObject, marker); 
            });
        }
        displayMap();
    }
}]);