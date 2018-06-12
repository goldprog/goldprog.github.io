$(function(){
  var video = $("#video");
  var loading = $("#loading"),
    content = $("#content"),
    playBtnWrap = $('.play_wrap'),
    playBtn = $("#play"),
    replayBtn = $('#refreshBtn'),
    videoSrc = "static/images/v0.mp4";
    //显示方式
    function showEle(el){
      if(el === video){
        video.css({
          'width': window.innerWidth + 'px',
            'height': window.innerHeight + 'px',
              'z-index': '1'
        });
      }
      el.show();
    }
    //隐藏的放法
    function hideEle(el){
      if(el === video){
        video.css({
          'width': '1px',
            'height': '1px',
              'z-index': '-1'
        });
      }
      el.hide()
    }

    function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }
    addSourceToVideo( video[0], videoSrc,"video/mp4");

   var isPhone6p = (function(){
   　var h=window.innerHeight,w=window.innerWidth,useragent = navigator.userAgent.toLowerCase(),isP6p = false;

   　if(useragent.match(/mobile/i)!==null && useragent.match(/iphone/i)!==null && ( h>w ? (Math.abs(w-414)<10 && h<=736) : (Math.abs(w-736)<10) && h<=414)) isP6p = true;

   　return isP6p;
   })();

   if(isPhone6p){
     video.css({"transform": "translate(-50%, -50%) scaleX(1.08)"});

   }

    var timer2 = setTimeout(function() {
      clearInterval(timer2);
      hideEle(loading);
      showEle(playBtnWrap);
    }, 9000)

    playBtn.click(function(){
      hideEle($('.all'));
      showEle(video);
      video[0].currentTime = 0;
      video[0].play();
    });
    replayBtn.click(function(){
      hideEle(content);
      showEle(video);
      video[0].play();
    });

    video[0].addEventListener("timeupdate", function() {
      if(!video[0].isPlayed && this.currentTime > .1){
        showEle(video);
        video[0].isPlayed = true;
        console.log('我被执行了！');
      }
    });
    video[0].addEventListener("ended", function() {
      hideEle(video);
      showEle(content);
    })
})
