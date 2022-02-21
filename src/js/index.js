const $numberOfTimeStamps = $('#numberOfTimeStamps span')
const $numberOfTimeStamps2 = $('#numberOfTimeStamps2 span')
const $plusBtn = $('#plusOne')
const $subBtn = $('#leaveOne')
const $testBtn = $('#testTimeStamps')
const $exportBtn = $('#exportTimeStamps')
const $clearBtn = $('#clearTimeStamps')
const $outPut = $('#outPut')

const save = new Save($numberOfTimeStamps)
const ex = new Export($outPut)
init()

function init() {
  let sub = JSON.parse(localStorage.getItem('leave'))
  if (!(sub instanceof Array)) {
    sub = []
  }
  $numberOfTimeStamps2.html(sub.length)
}

// 振动一次30ms
function vibrateOnce() {
  navigator.vibrate(30);
}

$plusBtn.on('click', () => {
  vibrateOnce()
  save.addTimeStampToSave()
  save.updateLengthOfSave($numberOfTimeStamps)
})

$subBtn.on('click', () => {
  vibrateOnce()
  let sub = JSON.parse(localStorage.getItem('leave'))
  if (!(sub instanceof Array)) {
    sub = []
  }
  sub.push(Date.now())
  localStorage.setItem('leave', JSON.stringify(sub))
  $numberOfTimeStamps2.html(sub.length)
})

$testBtn.on('click', () => {
  let before = JSON.parse(localStorage.getItem('clickTime'))
  if (!(this.save instanceof Array)) {
    this.save = []
  }
  let now = Date.now()
  for (let i = 0; i < 10000; i++) {
    before.push(now)
  }
  save.save = before
  save.updateLengthOfSave()
  save.saveSaveToLocalStorage()
})

$exportBtn.on('click', () => {
  ex.clearArr()
  let sub = JSON.parse(localStorage.getItem('leave'))
  if (!(sub instanceof Array)) {
    sub = []
  }
  ex.addItemArr(save.exportOriginData())
  ex.addItemArr(sub)
  ex.updateUL()
})

$clearBtn.on('click', () => {
  if (confirm('确定清空吗？')) {
    save.clearSave()
    localStorage.setItem('leave', JSON.stringify([]))
    $numberOfTimeStamps2.html(0)
    ex.clearUL()
  }

})
