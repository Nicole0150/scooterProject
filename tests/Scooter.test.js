const Scooter = require('../src/Scooter')
const User = require('../src/User');

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

describe('scooter methods', () => {
  let scooter;
  let user;
  beforeEach(() => {
    scooter = new Scooter('Central');
    user = new User('Nicole', 'XXX', 26);
  });

  // rent method
  test("rent method assigns charged scooter in good repair", () =>{
    const user = {username: "nicole", password: "XXX", age: 26, loggedIn: true}
    expect(scooter.rent(user)).toBe(user);
  })

  test("throws error if needs repaired", () =>{
    scooter.isBroken = true;
    expect(()=>{
      scooter.rent(user) 
    }).toThrow("Scooter needs repaired");
  })

  test("throws error if needs charged", ()=>{
    scooter.charge = 10;
    expect(() =>{
      scooter.rent(user)
    }).toThrow("Scooter needs charged")
  })

  // dock method
  test('should dock a scooter and reset user and station correctly', () => {
    scooter.rent(user);  // First, rent the scooter
    scooter.dock('Central');
    expect(scooter.station).toBe('Central');
    expect(scooter.user).toBeNull();
  });

});


  // requestRepair method

  // charge method

