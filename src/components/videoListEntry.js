angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '='
    },
    template:
    `<li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src={{ctrl.video.snippet.thumbnails.default.url}} />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title">{{ctrl.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{ctrl.video.snippet.description}}</div>
      </div>
    </li>`,
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'videoListEntryCtrl'
  }
})

.controller('videoListEntryCtrl', function() {
  this.video = window.exampleVideoData[0];
})
