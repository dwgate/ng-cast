angular.module('video-player')

.directive('search', function() {
  return {
  	scope: {
  		result: '<',
  	},
  	templateUrl: 'src/templates/search.html',
  	controllerAs: 'ctrl',
  	bindToController: true,
  	controller: 'searchCtrl'
  };
})

.controller('searchCtrl', function() {
  this.search = (input) => { console.log(input); this.result(input) };
})
