! function() {
  function e(e) {
    e === o && (o.style.width = window.innerWidth + "px", o.style.height = window.innerHeight + "px", o.style.zIndex = "1"), e.style.display = "block"
  }

  function n(e) {
    e === o && (o.style.width = "1px", o.style.height = "1px", o.style.zIndex = "-1"), e.style.display = "none"
  }

  function t() {
    function t() {
      o.pause(), o.removeEventListener("playing", t)
    }

    function i() {
      n(s), e(l), p && (clearTimeout(p), p = null)
    }

    function a(e) {
      var n = e.buffered.length > 0 ? e.buffered.end(0) : 0;
      return n = parseInt(1e3 * n + 1) / 1e3
    }

    function d() {
      var e = a(o),
        n = o.duration; + new Date - c > u || e >= n || y === e ? i() : (y = e, p = setTimeout(function() {
          console.log(e+':'+n);
        d()
      }, 500))
    }
    o.src = r;
    var c = +new Date,
      u = 4e3,
      p = null;
    o.play(), o.addEventListener("playing", t);
    var y = -1;
    d()
  }
  var i = document.getElementById.bind(document),
    o = i("video"),
    s = i("loading"),
    a = i("content"),
    l = i("play"),
    d = i("replay"),
    r = "./text_files/video.mp4";
  if (navigator.userAgent.indexOf("MiuiBrowser")) t(), o.className = "miui";
  else {
    var c = new XMLHttpRequest;
    c.open("GET", r, !0), c.responseType = "blob", c.onload = function() {
      if (200 === this.status && "video/mp4" === this.response.type) {
        var i = this.response,
          a = (window.URL || window.webkitURL || window || {}).createObjectURL(i);
        n(s), e(l), o.src = a
      } else t()
    }, c.onerror = function(e) {
      console.log(e), t()
    }, c.send()
  }
  l.addEventListener("click", function() {
    n(document.getElementsByClassName("all")[0]), o.play()
  }), d.addEventListener("click", function() {
    a.style.opacity = "0", e(o), o.play()
  }), o.addEventListener("timeupdate", function() {
    !o.isPlayed && this.currentTime > .1 && (e(o), o.isPlayed = !0)
  }), o.addEventListener("ended", function() {
    n(o), a.style.opacity = "1"
  })
}();
