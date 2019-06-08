const selectCarefully = require('../views/selectCarefully.html')
const { banner } = require("./banner")
const indexOp = require("./indexOp")
export default {
  render() {
    $('main').html(selectCarefully)
    banner()
    indexOp.init()
  }
}