const comments = require('../views/comments.html')
export default {
  render() {
    $('.m-details main').html(comments)
  }
}