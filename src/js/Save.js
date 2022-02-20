class Save {
  /**
   * @param el 用于保存数据数量的元素的jquery元素
   */
  constructor(el) {
    this.save = null
    this.updateSave()
    this.$numberOfTimeStamps = el
    this.updateLengthOfSave()
  }

  updateSave() {
    this.save = JSON.parse(localStorage.getItem('clickTime'))
    if (!(this.save instanceof Array)) {
      this.save = []
    }
  }

  saveSaveToLocalStorage() {
    localStorage.setItem('clickTime', JSON.stringify(this.save))
  }

  addTimeStampToSave() {
    this.updateSave()
    this.save.push(Date.now())
    this.saveSaveToLocalStorage()
  }

  clearSave() {
    this.save = []
    this.saveSaveToLocalStorage()
    this.updateLengthOfSave()
  }

  updateLengthOfSave() {
    this.$numberOfTimeStamps.html(this.save.length)
  }

  exportOriginData(){
    return this.save
  }
}
