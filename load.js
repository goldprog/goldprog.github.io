(function (global, factory) {
  global.lozad = factory.call(global)
})(window, function () {
  var defaultOptions = {
    thresholds: 0,
    load: function (el) {
      el.src = el.dataset.src
      el.onload = function () {
        console.log(`图片：${el.dataset.src}已经加载了`)
      }
    }
  }
  var _extend = Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        for (key in arguments[i]) {
          target[key] = arguments[i][key]
        }
      }
      return target
    }

  function getElements(selector) {
    if (selector instanceof Element) {
      return [selector]
    } else if (selector instanceof NodeList) {
      return selector
    } else {
      return document.querySelectorAll(selector)
    }
  }

  function isLoaded(element) {
    return element.getAttribute('data-load') === 'true'
  }

  function markAsLoad(element) {
    element.setAttribute('data-load', true)
  }

  var observerCallback = function (load) {
    return function (entries, io) {
      entries.forEach(item => {
        if (item.intersectionRatio > 0) {
          io.unobserve(item.target)
          if (!isLoaded(item.target)) {
            load(item.target)
            markAsLoad(item.target)
          }
        }
      })
    }
  }

  function lozad() {
    var el = (arguments.length > 0 && arguments[0] !== undefined) ? arguments[0] : '.lozad'
    var options = (arguments.length > 0 && arguments[1] !== undefined) ? arguments[1] : {}
    var mergerOptions = _extend({}, defaultOptions, options),
      thresholds = mergerOptions.thresholds,
      load = mergerOptions.load
    var io = void 0
    if (window.IntersectionObserver) {
      io = new IntersectionObserver(observerCallback(load), {
        thresholds: thresholds
      })
    }


    return {
      observer: function () {
        var elements = getElements(el)
        for (var i = 0; i < elements.length; i++) {
          if (isLoaded(elements[i])) continue

          if (io) {
            io.observe(elements[i])
            continue
          }
          load(elements[i])
          markAsLoad(elements[i])
        }
      },
      triggerLoad: function (element) {
        if (isLoaded(element)) {
          return
        }
        load(elements[i])
        markAsLoad(elements[i])
      }
    }
  }
  return lozad
})