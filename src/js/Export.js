class Export {
  /**
   * @param el 导出列表的jQuery元素
   */
  constructor(el) {
    this.export = []
    this.$el = el
  }

  clearArr() {
    this.export = []
  }

  clearUL(){
    this.$el.html('')
  }

  updateUL() {
    this.clearUL()
    console.log(this.export)
    for (let item of this.export) {
      let li = document.createElement('li')
      li.innerText = item
      this.$el.append(li)
    }
  }

  addItemArr(item) {
    this.export.push(item)
  }
}

