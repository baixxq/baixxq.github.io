wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: false,
  live: true
})
wow.init()

// 插件用 async 脚本事后加 .wow，WOW 会先 visibility:hidden；
// 无痕/冷缓存时 50ms 一次常常跑在加类之前，卡片会一直隐形。
function revealWow(el) {
  el.style.visibility = 'visible'
  el.style.opacity = '1'
  el.style.animationName = ''
  el.style.webkitAnimationName = ''
  el.style.mozAnimationName = ''
  if (el.className.indexOf('animate__animated') === -1) {
    el.className = el.className + ' animate__animated'
  }
}

function playAllWow() {
  var nodes = document.querySelectorAll('.wow')
  if (!nodes.length) return false
  for (var i = 0; i < nodes.length; i++) revealWow(nodes[i])
  if (wow && wow.boxes) wow.boxes = []
  return true
}

function ensureWowVisible() {
  if (playAllWow()) return
  var tries = 0
  var timer = setInterval(function () {
    tries += 1
    if (playAllWow() || tries >= 40) clearInterval(timer)
  }, 50)
}

ensureWowVisible()
document.addEventListener('DOMContentLoaded', playAllWow)
window.addEventListener('load', playAllWow)
window.addEventListener('scroll', playAllWow, { passive: true })
