const comments = require('../views/comments.html')
import fetch from '../models/fetch'
export default {
  async render() {
    let id = $(".m-details").attr("data-id")
    let dom = $('<img src="../images/loading.gif" style="width:100%;height:100%;">')
    $('.m-details>main').html(dom)
    let result = await fetch.get(`/api/v3/goods/review/main.html?page=1&gid=${id}&is_img=&only_this_one=0&system=wap&isWeb=1&version=303&distinct_id=16b4be5c18628-0508d2c39e4629-2d604637-250125-16b4be5c1873a8`)
    let data = JSON.parse(result).lists
    let commentsTpl = template.render(comments, { data })
    $('.m-details>main').html(commentsTpl)
  }
}