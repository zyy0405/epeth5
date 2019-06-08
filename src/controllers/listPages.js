const listPages = require('../views/listPages.html')
const listPagesListTpl = require('../views/listPages.list.html')
const BScroll = require('better-scroll').default
import fetch from '../models/fetch'
// export default {
//   render() {
//     $('#index').html(listPages)
//   }
// }
let listPagesList = []
let currentPage = 1
const render = async () => {
  $('#index').html(listPages)
  let result = await fetch.get('/api/v3/book/list.html?pettype=dog&subid=7&groupid=2&page=1&system=wap&isWeb=1&version=303&distinct_id=16b2c20fb3a3b4-0c9a3a62a4fbe8-2d604637-250125-16b2c20fb3b547&_=1559980791018')
  let data = listPagesList = JSON.parse(result).good_list
  let renderListPagesListTpl = template.render(listPagesListTpl, { data })
  $(".goodsLists").html(renderListPagesListTpl)

  // 实现下拉刷新和上拉加载
  betterScroll()
}
function betterScroll() {
  // Better scroll 实例化
  let bScroll = new BScroll('#listPages-scroll', {
    probeType: 1,
    click: true
  })
  let head = $('.head img'),
    topImgHasClass = head.hasClass('up')
  let foot = $('.foot img'),
    bottomImgHasClass = head.hasClass('down')

  // 初始化位置
  bScroll.scrollTo(0, -40)

  // 绑定滑动事件
  bScroll.on('scroll', function () {
    let y = this.y
    let maxY = this.maxScrollY - y
    console.log(y)
    // 下拉，当隐藏的loading完全显示的时候触发
    if (y >= 0) {
      !topImgHasClass && head.addClass('up')
      return
    }

    // 上拉，当滚动到最底部时候触发
    if (maxY >= 0) {
      !bottomImgHasClass && foot.addClass('down')
      return
    }
  })

  // 绑定手指松开触发的事件
  bScroll.on('scrollEnd', async function () {
    // 下拉刷新处理
    if (this.y >= -40 && this.y < 0) {
      this.scrollTo(0, -40)
      head.removeClass('up')
    } else if (this.y >= 0) {
      head.attr('src', '/images/listPages/ajax-loader.gif')

      // 异步加载数据
      let result = await fetch.get(`/api/v3/book/list.html?pettype=dog&subid=7&groupid=2&page=2&system=wap&isWeb=1&version=303&distinct_id=16b2c20fb3a3b4-0c9a3a62a4fbe8-2d604637-250125-16b2c20fb3b547&_=1559980791018`)
      let goodList = JSON.parse(result).good_list
      let data = listPagesList = [...goodList, ...listPagesList]

      let renderListPagesListTpl = template.render(listPagesListTpl, { data })
      $('.goodsLists').html(renderListPagesListTpl)

      this.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scrollTo(0, -40)
      head.removeClass('up')
      head.attr('src', '/images/listPages/arrow.png')
    }

    // 上拉加载处理
    let maxY = this.maxScrollY - this.y
    if (maxY > -40 && maxY < 0) {
      this.scrollTo(0, this.maxScrollY + 40);
      foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/images/listPages/ajax-loader.gif')
      // 异步加载数据
      let result = await fetch.get(`/api/v3/book/list.html?pettype=dog&subid=7&groupid=2&page=${++currentPage}&system=wap&isWeb=1&version=303&distinct_id=16b2c20fb3a3b4-0c9a3a62a4fbe8-2d604637-250125-16b2c20fb3b547&_=1559980791018`)
      let goodList = JSON.parse(result).good_list
      let data = listPagesList = [...listPagesList, ...goodList]

      let renderListPagesListTpl = template.render(listPagesListTpl, { data })
      $('.goodsLists').html(renderListPagesListTpl)


      this.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scrollTo(0, this.maxScrollY + 40)
      head.removeClass('down')
      head.attr('src', '/images/listPages/arrow.png')
    }
  })
}
export default {
  render
}