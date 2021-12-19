const $plus = $('#plusOne')
const $numberOfTimeStamps = $('#numberOfTimeStamps span')
const $parseTimeStamps = $('#parseTimeStamps')
const $outPut = $('#outPut')
const $clearTimeStamps = $('#clearTimeStamps')
let ls
// 振动一次30ms
function vibrateOnce() {
  navigator.vibrate(30);
}

function updateLS() {
  ls = JSON.parse(localStorage.getItem('clickTime'))
  if (!(ls instanceof Array)) {
    ls = []
  }
}

function addTimeStampToLocalStorage() {
  updateLS()
  ls.push(Date.now())
  localStorage.setItem('clickTime', JSON.stringify(ls))
}

function updateNumberOfTimeStamps() {
  $numberOfTimeStamps.html(ls.length)
}

/**
 * @return {Array<String>}
 */
function parseTimeStamps() {

}

/**
 * @param arr {Array<String>}
 */
function setOutPut(arr) {

}

$plus.on('click', () => {
  vibrateOnce()
  addTimeStampToLocalStorage()
  updateNumberOfTimeStamps()
})
$clearTimeStamps.on('click', ()=>{
  confirm('确定清空吗？')
})

updateLS()
updateNumberOfTimeStamps()
