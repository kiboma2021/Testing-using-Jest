const User = require('./index')

test('Test greeting', () => {
  const user = new User();
  expect(user.greeting()).toBe("Hello Stranger");
 })