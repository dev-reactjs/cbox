module.exports = {
  _handleCardColor(type, color) {
    switch (type) {
      case 0:
        return color[0]
      case 1:
        return color[1]
      case 2:
        return color[2]
      case 3:
        return color[3]
      case 4:
        return color[4]
      default:
        break
    }
  }
}
