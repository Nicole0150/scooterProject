const User = require('../src/User'); // Adjust path accordingly

describe('User class tests', () => {
  const user = new User('johnDoe', 'password123', 30);
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string');
  });

  test('password should be a string', () => {
    expect(typeof user.password).toBe('string');
  });

  test('age should be a number', () => {
    expect(typeof user.age).toBe('number');
  });

  test('login should set loggedIn to true for correct password', () => {
    user.login('password123');
    expect(user.loggedIn).toBe(true);
  });

  test('login should throw error for incorrect password', () => {
    expect(() => user.login('wrongpassword')).toThrow('Incorrect password');
  });

  test("Logout logs out user", ()=>{
    user.logout("test123");
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});