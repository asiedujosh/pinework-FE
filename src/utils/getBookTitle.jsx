export const getBookTitle = (bookArr, id) => {
  let book = bookArr.filter((item) => item.id == id)[0]
  return book ? book.bookName : "No Book Found"
}
