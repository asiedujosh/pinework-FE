const idToClass = (arr, id) => {
  let arrOfItem = arr?.filter((item) => item.id == id)
  if (arrOfItem.length > 0) {
    return arrOfItem[0].classes
  }
}

export default idToClass
