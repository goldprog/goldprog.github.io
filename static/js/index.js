$(function(){
  var video = $("#video");
  var loading = $("#loading"),
    content = $("#content"),
    playBtn = $("#play"),
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

    var timer2 = setTimeout(function() {
      clearInterval(timer2);
      hideEle(loading);
      showEle(playBtn);
    }, 9000)

    playBtn.click(function(){
      hideEle($('.all'));
      showEle(video);
      video[0].currentTime = 0;
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
      showEle(content);
    })
})
