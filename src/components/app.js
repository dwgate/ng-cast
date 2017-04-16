angular.module('video-player', [])


  .directive('app', function() {
    return {
      scope: {
      },
      templateUrl: 'src/templates/app.html',
      controllerAs:'ctrl',
      bindToController: true,
      controller: 
      function() {
        this.videos = window.exampleVideoData;

        this.selectVideo = function(video) {
          this.currentVideo = video;
        };

        this.searchResults = function(query) {
          console.log(youTube);
        };

        this.currentVideo = window.exampleVideoData[0];
        this.result = (data) => { this.searchResults(data) };



      }
    }
  })

 

  // .controller('appCtrl', function(youTube) {

  //   this.searchService = youTube;
  //   this.videos = window.exampleVideoData;

  //   this.selectVideo = function(video) {
  //     this.currentVideo = video;
  //   };

  //   this.searchResults = function(query) {
  //     console.log(youTube);
  //   };

  //   this.currentVideo = window.exampleVideoData[0];
  //   this.result = (data) => { this.searchResults(data) };

  // })
