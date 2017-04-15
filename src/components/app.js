angular.module('video-player', [])


  .directive('app', function() {
    return {
      scope: {
      },
      templateUrl: 'src/templates/app.html',
      controllerAs:'ctrl',
      bindToController: true,
      controller: 'appCtrl'
    }
  })

  .controller('appCtrl', function() {
    this.videos = window.exampleVideoData;
    this.selectVideo = function() {};
    this.searchResults = function() {};
    this.currentVideo = window.exampleVideoData[0];
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