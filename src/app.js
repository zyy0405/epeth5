// const indexTpl = require('./views/index.html')
// const { banner } = require("./controllers/banner")
// const { list } = require('./controllers/position')
// const indexOperate = require('./controllers/index')
// const renderedIndexTpl = template.render(indexTpl, {})

// document.querySelector('#app').innerHTML = renderedIndexTpl
// banner()
// list()
// indexOperate.init()
import Router from './router/'


window.router = new Router({
    mode: 'hash' // hash | history
})