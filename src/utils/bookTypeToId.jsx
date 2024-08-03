const bookTypeToId = (arr, book) => {
  let arrOfItem = arr?.filter((item) => item.bookType == book)
  if (arrOfItem.length > 0) {
    return arrOfItem[0].id
  }
}

export default bookTypeToId
