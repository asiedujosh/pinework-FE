export const getPageTitle = (bookPageArr, id) => {
  let pageData
  let page = bookPageArr.filter((item) => item.id == id)[0]
  if (page) {
    pageData = {
      title: page.title,
      no: page.pageNo,
    }
  }
  return page ? pageData : "No Book Found"
}
