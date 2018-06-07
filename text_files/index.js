$(function(){
  var vConsole = new VConsole();
  var video = $("#video"),
    loading = $("#loading"),
    content = $("#content"),
    playBtn = $("#play"),
    replayBtn = $("#replay"),
    videoSrc = "./text_files/video.mp4";
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
    //加载视频
    function loadVideo(){

      function videoPause(){
        video[0].pause();
        video[0].removeEventListener("playing", loadVideo)
      }

      function loadComplete(){
        hideEle(loading);
        showEle(playBtn);
        if(timer){
          clearTimeout(timer);
          timer = null;
        }
      }

      function videoBuffer(el){
        var time = el.buffered.length > 0 ? el.buffered.end(0) : 0;
        return time = parseInt(1000 * time + 1) / 1000;
      }

      function loadon(){
        var alreadyTime = videoBuffer(video[0]),
            duration = video[0].duration;
        if(+ new Date - oldTime > delay || alreadyTime >= duration || y === alreadyTime){
          loadComplete()
        }else{
          y = alreadyTime;
          timer = setTimeout(function() {
            loadon()
          }, 500)
        }
      }

      video[0].src = videoSrc;
      var oldTime = +new Date,
        delay = 4000,
        timer = null;
      video[0].play();
      video[0].addEventListener("playing", loadVideo);
      var y = -1;

      loadon();
    }

    if (navigator.userAgent.indexOf("MiuiBrowser")!==-1) {
      loadVideo();
      video.addClass('miui');
    }else {
      var req= new XMLHttpRequest();
      req.open("GET", videoSrc, true);
      req.responseType = "blob";
      req.onload = function() {
        if (200 === this.status && "video/mp4" === this.response.type) {
          var res = this.response,
            url = (window.URL || window.webkitURL || window || {}).createObjectURL(res);
            console.log(res);
          hideEle(loading);
          showEle(playBtn);
          video[0].src = url;
        } else {
          loadVideo();
        }
      }
      req.onerror = function(e) {
        console.log(e);
        loadVideo();
      };
      req.send()
   }
    playBtn.click(function(){
      hideEle($('.all'));
      //showEle(video);
      video[0].play();
    })
    replayBtn.click(function(){
      content.css("opacity",0);
      showEle(video);
      video[0].play();
    })
    video[0].addEventListener("timeupdate", function() {
      if(!video[0].isPlayed && this.currentTime > .1){
        showEle(video);
        video[0].isPlayed = true;
        console.log('我被执行了！');
      }
    });
    video[0].addEventListener("ended", function() {
      hideEle(video);
      content.css('opacity',1)
    })
})
