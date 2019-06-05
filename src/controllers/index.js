module.exports = {
    init() {
        this.bindEvent()
        this.toTopInit()
    },
    // 绑定事件
    bindEvent() {
        $(".backToTop").on("click", this.backToTop.bind(this))
    },
    // 回到顶部初始化和改变header背景色
    toTopInit() {
        $(".backToTop").hide()//隐藏to top按钮
        $("main").scroll(() => {
            this.headerFixed();
            //当window的scrolltop距离大于1时，go to 
            if ($("main").scrollTop() > 100) {
                $(".backToTop").show();
            } else {
                $(".backToTop").hide();
            }
        })
    },
    // 回到顶部
    backToTop() {
        console.log("99")
        $('main').stop().animate({
            scrollTop: 0
        }, "fast");
    },
    // 滚动时固定header部分在顶部
    headerFixed(_this) {
        if ($("main").scrollTop() <= 0) {
            $("header").removeClass("fixed")
        } else {
            $("header").addClass("fixed")
        }

    }
}