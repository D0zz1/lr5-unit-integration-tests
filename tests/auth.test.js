const { isPasswordValid, isEmailValid } = require('../src/auth');

describe('Модульні тести авторизації', () => {
  test('Перевірка валідності пароля', () => {
    expect(isPasswordValid('password123')).toBe(true);
    expect(isPasswordValid('short')).toBe(false);
  });

  test('Перевірка валідності email', () => {
    expect(isEmailValid('student@op.edu.ua')).toBe(true);
    expect(isEmailValid('wrong-email')).toBe(false);
  });
});