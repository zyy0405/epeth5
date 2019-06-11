const search = require('../views/search.html')
import searchOp from './searchOp'
export default {
  render() {
    $('main').html(search)
    searchOp.init()
    this.bindEvent()
  },
  bindEvent() {
    $(".goBack").on("click", this.goBack)
  },
  // 返回上级路由
  goBack(e) {
    e.preventDefault()
    history.back()
  }
}