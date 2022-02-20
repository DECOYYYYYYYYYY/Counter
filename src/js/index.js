const $numberOfTimeStamps = $('#numberOfTimeStamps span')
const $plusBtn = $('#plusOne')
const $testBtn = $('#testTimeStamps')
const $exportBtn = $('#exportTimeStamps')
const $clearBtn = $('#clearTimeStamps')
const $outPut = $('#outPut')

const save = new Save($numberOfTimeStamps)
const ex = new Export($outPut)

// 振动一次30ms
function vibrateOnce() {
  navigator.vibrate(30);
}

$plusBtn.on('click', () => {
  vibrateOnce()
  save.addTimeStampToSave()
  save.updateLengthOfSave($numberOfTimeStamps)
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
  ex.addItemArr(save.exportOriginData())
  ex.updateUL()
})

$clearBtn.on('click', () => {
  if (confirm('确定清空吗？')) {
    save.clearSave()
  }
})
