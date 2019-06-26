export default {
  get(url, data) {
    return $.ajax({
      url,
      type: 'get',
      data: data,
      success(result) {
        return result
      }
    })
  }
}