const indexTpl = require('./views/index.html')
const { banner } = require("./controllers/banner")
const { list } = require('./controllers/position')
const renderedIndexTpl = template.render(indexTpl, {})

document.querySelector('#app').innerHTML = renderedIndexTpl
banner()
list()