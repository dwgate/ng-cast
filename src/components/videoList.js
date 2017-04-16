angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      selectVideo: '<',
      currentVideo: '='
    },
    templateUrl: 'src/templates/videoList.html',
    controllerAs:'ctrl',
    bindToController: true,
    controller: function() {

      this.onClick = (video) => {
        this.selectVideo(video);
      };

    }
  }
})