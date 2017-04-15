angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '=',
      onClick: '<'
    },
    // templateUrl: 'src/templates/videoList.html',
    template: `
    <ul class="video-list">
      <video-list-entry 
      ng-repeat="video in ctrl.videos track by $index">
      <h5><em>videoListEntry</em>{{video}}</h5></video-list-entry>
    </ul>`,
    controllerAs:'ctrl',
    bindToController: true,
    controller: 'videoListCtrl'
  }
})

.controller('videoListCtrl', function() {
  this.videos = window.exampleVideoData;
  this.onClick = function() {};
})
