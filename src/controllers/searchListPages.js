const searchListPages = require('../views/searchListPages.html')
const queryString = require('query-string');
const searchListPagesListTpl = require('../views/searchListPages.list.html')
import fetch from '../models/fetch'
import Router from '../router/'
export default {
    async render() {
        this.inputValue = queryString.parse(location.hash.split('?')[1]).inputValue
        this.inputValue = encodeURI(this.inputValue)
        $('#index').html(searchListPages)
        let result = await fetch.get(`/api/v3/goods/list/main.html?version=358&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=keyword%3A${this.inputValue}&real_wid=&region=&system=wap&isWeb=1&distinct_id=16b369558702f5-0a0e1ce5058ea7-2d604637-250125-16b3695587114e&_=1560175632841`)
        let data = JSON.parse(result).list
        let renderSearchListPagesListTpl = template.render(searchListPagesListTpl, { data })
        $(".searchGoodsListPage").html(renderSearchListPagesListTpl)
        this.bindEvent()
    },
    bindEvent() {
        let _this = this
        $(".goBack").on("click", this.goBack)
        $('.searchGoodsListPage').on('click', 'li', function () {
            let id = $(this).attr('data-id')
            _this.gotoPage(id)
        })
    },
    gotoPage(id) {
        let router = new Router({ mode: 'hash' })
        router.push('/index/goodDetail?id=' + id)
    },
    // 返回上级路由
    goBack(e) {
        e.preventDefault()
        history.back()
    }
}