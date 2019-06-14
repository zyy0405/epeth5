import Router from '../router/'
export default {
    // 初始化获取搜索关键字和绑定搜索按钮事件
    init() {
        this.bindEvent();
    },
    bindEvent() {
        $(".searchBtn").on("click", this.toSearchPage);
    },
    toSearchPage(e) {
        e.preventDefault();
        this.value = $(".searchInput").val()
        if (this.value != "") {
            // let router = new Router({ mode: 'hash' })
            window.router.push('/index/searchListPages?inputValue=' + this.value)
        }

    }
}