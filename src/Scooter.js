
class Scooter{
  static nextSerial = 1;
  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  rent(user){
    if (this.charge >= 20 && this.isBroken === false){
      this.station = null;
      this.user = user;
      return this.user;
    }else if (this.charge >= 20 && this.isBroken === true){
      throw new Error("Scooter needs repaired");
    }else {
      throw new Error("Scooter needs charged")
    }
  }
  dock(station){
    this.station = station;
    this.user = null;
    console.log(`${this.serial} scooter has been docked at ${this.station}`);
  }
}

module.exports = Scooter
