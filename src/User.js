class User {
  constructor(username, password, age, loggedIn = false) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = loggedIn;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      return this.loggedIn;
    } else {
      throw new Error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
    return this.loggedIn;
  }
}

module.exports = User;




