import Router from '../router/'
export default {
    // 初始化获取搜索关键字和绑定搜索按钮事件
    init() {
        this.bindEvent();
    },
    bindEvent() {
        $(".searchBtn").on("click", this.toSearchPage);
        $('.searchAKey').on('click', this.toSearchPage)
    },
    toSearchPage(e) {
        e.preventDefault();
        this.value = $(".searchInput").val()
        console.log($(e.target).html())
        if (e.target.className === 'searchAKey') {
            window.router.push('/index/searchListPages?inputValue=' + $(e.target).html())
        } else if (this.value != "") {
            window.router.push('/index/searchListPages?inputValue=' + this.value)
        }
    }
}