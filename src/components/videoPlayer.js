angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs:'ctrl',
    bindToController: true,
    controller: 'videoPlayerCtrl'
  }
})
.controller('videoPlayerCtrl', function() {
  // this.video = {};
  // this.src = "https://www.youtube.com/embed/";
})

