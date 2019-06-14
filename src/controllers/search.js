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

    // $(".searchBtn").on("click", this.stop)
  },
  stop(e) {
    e.preventDefault()
    e.stopPropagation()
    location.hash = "#/index/searchListPages"
  },
  // 返回上级路由
  goBack(e) {
    e.preventDefault()
    // history.back()
    window.router.push('/index/home/selectCarefully')
  }
}