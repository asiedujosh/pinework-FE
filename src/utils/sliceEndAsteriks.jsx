const SliceEndAsteriks = (str) => {
  if (str.endsWith("**")) {
    return str.slice(0, -2)
  }
  return str
}

export default SliceEndAsteriks
