var video = $("#video");
$(function() {
  var vConsole = new VConsole(),
    loading = $("#loading"),
    content = $("#content"),
    playBtn = $("#play"),
    replayBtn = $("#replay"),
    videoSrc = "./text_files/video.mp4";
  //显示方式
  function showEle(el) {
    if (el === video) {
      video.css({
        'width': window.innerWidth + 'px',
        'height': window.innerHeight + 'px',
        'z-index': '1'
      });
    }
    el.show();
  }
  //隐藏的放法
  function hideEle(el) {
    if (el === video) {
      video.css({
        'width': '1px',
        'height': '1px',
        'z-index': '-1'
      });
    }
    el.hide()
  }

  var timer2 = setTimeout(function() {
    clearInterval(timer2);
    hideEle(loading);
    showEle(playBtn);
  }, 20000)


  addSourceToVideo(video[0], "http://shared.youdao.com/market/xijing/img/v0.mp4", "video/mp4");
  //
  // function getEnd(video) {
  //    var end = video.buffered.length > 0 ? video.buffered.end(0) : 0;
  //    return end = parseInt(1000 * end + 1) / 1000;
  // }
  //
  function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');
    source.src = src;
    source.type = type;
    element.appendChild(source);

  }
  var isPhone6p = (function() {　　
    var h = window.innerHeight,
      w = window.innerWidth,
      useragent = navigator.userAgent.toLowerCase(),
      isP6p = false;
    if (useragent.match(/mobile/i) !== null && useragent.match(/iphone/i) !== null && (h > w ? (Math.abs(w - 414) < 10 && h <= 736) : (Math.abs(w - 736) < 10) && h <= 414)) isP6p = true;
    return isP6p;
  })();
  console.log(isPhone6p);
  if(isPhone6p){
    video.css({"transform":"translate(-50%, -50%) scaleX(1.17)"})
  }
  //
  // progressHandler = function(e) {
  //     if (video[0].duration) {
  //         var percent = (video[0].buffered.end(0) / video[0].duration) * 100;
  //         console.log(parseInt(percent) + "%");
  //         if (percent >= 60) {
  //             console.log("loaded!");
  //         }
  //         video[0].currentTime++;
  //         console.log(video[0].currentTime)
  //     }
  // }
  // var timer = setInterval(function() {
  //     var end = getEnd(video[0]);
  //     var duration = video[0].duration * 0.5;
  //     console.log(end+';;;;;'+duration)
  //     if(end < duration) {
  //         console.log(end+"---------------"+duration);
  //         progressHandler(video);
  //     }
  //
  //     if (end >= duration) {
  //         clearInterval(timer);
  //         hideEle(loading);
  //         showEle(playBtn);
  //     }
  //
  // }, 500);


  //加载视频
  function loadVideo() {

    function videoPause() {
      video[0].pause();
      video[0].removeEventListener("playing", loadVideo)
    }

    function loadComplete() {
      hideEle(loading);
      showEle(playBtn);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }

    function videoBuffer(el) {
      var time = el.buffered.length > 0 ? el.buffered.end(0) : 0;
      return time = parseInt(1000 * time + 1) / 1000;
    }

    function loadon() {
      var alreadyTime = videoBuffer(video[0]),
        duration = video[0].duration;
      if (+new Date - oldTime > delay || alreadyTime >= duration || y === alreadyTime) {
        loadComplete()
      } else {
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

  //  if (navigator.userAgent.indexOf("MiuiBrowser")!==-1) {
  //    //loadVideo();
  //    video.addClass('miui');
  //  }else {
  //    var req= new XMLHttpRequest();
  //    req.open("GET", videoSrc, true);
  //    req.responseType = "blob";
  //    req.onload = function() {
  //      if (200 === this.status && "video/mp4" === this.response.type) {
  //        var res = this.response,
  //          url = (window.URL || window.webkitURL || window || {}).createObjectURL(res);
  //          console.log(res);
  //        hideEle(loading);
  //        showEle(playBtn);
  //        video[0].src = url;
  //      } else {
  //        loadVideo();
  //      }
  //    }
  //    req.onerror = function(e) {
  //      console.log(e);
  //      loadVideo();
  //    };
  //    req.send()
  // }
  playBtn.click(function() {
    hideEle($('.all'));
    showEle(video);
    video[0].currentTime = 0;
    video[0].play();
  })
  replayBtn.click(function() {
    content.css("opacity", 0);
    showEle(video);
    video[0].play();
  })
  video[0].addEventListener("timeupdate", function() {
    // if(!video[0].isPlayed && this.currentTime > .1){
    //   showEle(video);
    //   video[0].isPlayed = true;
    //   console.log('我被执行了！');
    // }
  });
  video[0].addEventListener("ended", function() {
    hideEle(video);
    content.css('opacity', 1)
  })
})

// wx.ready(function() {
//   video[0].play();
// });
