const searchListPages = require('../views/searchListPages.html')
const queryString = require('query-string');
const searchListPagesListTpl = require('../views/searchListPages.list.html')
import fetch from '../models/fetch'
import Router from '../router/'
export default {
    async render() {
        this.inputValue = queryString.parse(location.hash.split('?')[1]).inputValue
        // this.inputValue = encodeURI(this.inputValue)
        // $('#index').html(searchListPages)
        let searchListPagesTpl = template.render(searchListPages, { keywords: this.inputValue })
        $("#index").html(searchListPagesTpl)
        let dom = $('<img src="../images/loading.gif" style="width:100%;height:100%;">')
        $('.searchGoodsListPage').html(dom)
        let findData = {
            page: 0,
            pagesize: 100,
            keywords: this.inputValue
        }
        let result = await fetch.get(`/fe/api/position/find`, findData)
        let data = result.data.result
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
        // let router = new Router({ mode: 'hash' })
        window.router.push('/index/goodDetail/good?id=' + id)
    },
    // 返回上级路由
    goBack(e) {
        e.preventDefault()
        history.back()
    }
}