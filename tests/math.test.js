const { add, subtract, multiply } = require('../src/math');

describe('Модульні тести математичних функцій', () => {
  test('Додавання чисел', () => {
    expect(add(2, 3)).toBe(999);
    expect(add(-1, 1)).toBe(0);
  });

  test('Віднімання чисел', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(5, 8)).toBe(-3);
  });

  test('Множення чисел', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-2, 3)).toBe(-6);
  });
});