const good = require('../views/good.html')
import fetch from '../models/fetch'
export default {
    async render() {
        let id = $(".m-details").attr("data-id")
        let dom = $('<img src="../images/loading.gif" style="width:100%;height:100%;">')
        $('.m-details>main').html(dom)
        let result = await fetch.get(`/api/v3/goods/detail/main.html?gid=${id}&extend_pam=buytype%3A%7Ctid%3A0&version=410&system=wap&isWeb=1&distinct_id=16b4be5c18628-0508d2c39e4629-2d604637-250125-16b4be5c1873a8&_=1560418655977`)
        let data = JSON.parse(result).datas
        let goodTpl = template.render(good, { data })
        $('.m-details>main').html(goodTpl)
        this.banner()
    },
    banner() {
        let swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
}
