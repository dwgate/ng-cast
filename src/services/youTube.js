angular.module('video-player')
.service('youTube', function($http){
  this.search = function() {
    return $http({
      method: 'GET',
      url: "https://www.googleapis.com/youtube/v3/search",
      videoEmbeddable: true,
      data: {
        type: 'video',
        q: query,
        maxResults: 10,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet'
      }
    })
      .then(function successCallback(response) {
        console.log('data received! ' + response);

        }, function errorCallback(response) {
            console.log('error! ' + response);
        })
  }
});
