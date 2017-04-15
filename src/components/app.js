angular.module('video-player', [])


  .directive('app', function() {
    return {
      scope: {
      },
      restrict: 'E',
      template: `<div ng-controller="appCtrl">
                    Video-Player App
                  </div>
                  <div>
                    <videoList></videoList>
                  </div>`,
      controllerAs:'ctrl',
      bindToController: true,
      controller: 'appCtrl'
    }
  })

  .controller('appCtrl', function() {
    this.videos = [];
    this.selectVideo = function() {};
    this.searchResults = function() {};
    this.currentVideo = {};
  })


// controllerAs: 'props',
// bindToController: true,
// controller: function() {
//   this.selectVideo = function() {};
//   this.searchResults =function() {};
//   this.currentVideo = {};




//angular.module('docsSimpleDirective', [])
// .controller('Controller', ['$scope', function($scope) {
//   $scope.customer = {
//     name: 'Naomi',
//     address: '1600 Amphitheatre'
//   };
// }])
// .directive('myCustomer', function() {
//   return {
//     template: 'Name: {{customer.name}} Address: {{customer.address}}'
//   };
// });