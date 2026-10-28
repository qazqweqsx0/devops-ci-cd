const { formatPrice, calculateTotal } = require('../src/format');
describe('formatPrice', () => {
test('форматирует число с двумя знаками и знаком рубля', () => {
expect(formatPrice(1234.5)).toBe('1234.50 ₽');
});
test('выбрасывает ошибку для нечислового значения', () => {
expect(() => formatPrice('100')).toThrow(TypeError);
});
});
describe('calculateTotal', () => {
test('считает сумму с учётом количества', () => {
expect(calculateTotal([
{ price: 100.5, quantity: 2 },
{ price: 50, quantity: 1 },
])).toBe(251);
});
test('возвращает 0 для пустого списка', () => {
expect(calculateTotal([])).toBe(0);
});
});
