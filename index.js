class User {
  greeting (name) {
    return "Hello " + (name || "Stranger");
  }
  goodbye (name) {
    return "Hello " + (name || "Stranger");
  }
}

module.exports = User;