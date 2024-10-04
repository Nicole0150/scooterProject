const Scooter = require('./Scooter')
const User = require('./User');

class ScooterApp {
  constructor(){
    this.stations = {
      Central: [],
      QueenSt:[],
      Partick:[]
    };
    this.registeredUsers = {};
  }
  registerUser(username, password, age){
    if(username in this.registerUsers){
      throw new Error("User has been registered");
    }else if (age < 18){
      throw new Error("Too young to register")
    }else{
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      return user;
    }
  }

  loginUser(username, password){
    const user = this.registeredUsers[username];
    if (!user){
      throw new Error("Username or password is incorrect");
    }
    try {
      user.login(password);
      console.log("User has been logged in");
    }catch (error) {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username){
    const user = this.registeredUsers[username];
    if(!user) {
      throw new Error("No such user is logged in");
    }else{
      user.logout();
      console.log("User has been logged out");
    }
  }

  createScooter(station){
    if (!this.stations[station]){
      throw new Error("Station does not exist");
    }
    const scooter = new Scooter(station);
    console.log("Created new scooter");
    return scooter;
  }

  dockScooter(scooter, station){
    if (!this.stations[station]){
      throw new Error("Station does not exist");
    }

    if(scooter.station === station){
      throw new Error("Scooter already at station");
    }
    scooter.dock(station);
    this.stations[station].push(scooter);
    console.log("Scooter is docked");
  }

  rentScooter(scooter, user){
    if(scooter.user){
      throw new Error("Scooter already rented");
    }

  }

  print(){
    console.log(this.registeredUsers);
    for (station in stations){
      console.log(`${station}: ${this.stations[station].length}`)
    }
  }
}

module.exports = ScooterApp
