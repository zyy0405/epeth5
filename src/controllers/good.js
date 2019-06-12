const good = require('../views/good.html')
export default {
    render() {
        $('.m-details main').html(good)
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