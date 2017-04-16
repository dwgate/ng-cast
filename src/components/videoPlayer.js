angular.module('video-player')

.directive('videoPlayer', [ '$sce', function($sce) {
  return {
    scope: {
      video: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs:'ctrl',
    bindToController: true,
    controller: function(){
      this.renderUrl = function(videoId) { 
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
      };
      this.check = function() {
        return !!this.video;
      };
    }
  }
}])

// .controller('mainCtrl', ['$sce', function($sce) {
//   this.renderUrl = function(videoId) { 
//     return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
//   };

// }])

// .controller('videoPlayerCtrl', function() {
  // this.video = {};
  // this.src = "https://www.youtube.com/embed/";
// })

