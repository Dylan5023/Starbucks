// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '8UAFEHk2VhA', //처음 재생할 유튜브 영상 ID
    playerVars: { // 대소문자 중요 
      autoplay : true, //자동 재생 유무
      loop : true, // 반복 재생 유무
      Playlist :'8UAFEHk2VhA'
    },
    events: {
      onReady : function(event) {
        event.target.mute() // 음소거 
      }
    }

  });
}

