const classToId = (arr, className) => {
  let arrOfItem = arr?.filter((item) => item.classes == className)
  if (arrOfItem.length > 0) {
    return arrOfItem[0].id
  }
}

export default classToId
