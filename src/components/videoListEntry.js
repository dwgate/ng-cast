angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      titleClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // this.titleClick = function() {console.log('clicked')}
    }
  }
})

// .controller('videoListEntryCtrl', function() {
//   this.video = window.exampleVideoData[0];
// })