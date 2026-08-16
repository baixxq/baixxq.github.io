wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: false,
  live: true
})
wow.init()

// 打开页面就把所有卡片一起播完，不等滚动
function playAllWow() {
  document.querySelectorAll('.wow').forEach(function (el) {
    el.style.visibility = 'visible'
    if (el.className.indexOf('animate__animated') === -1) {
      el.className = el.className + ' animate__animated'
    }
  })
  if (wow.boxes) wow.boxes = []
}

setTimeout(playAllWow, 50)
