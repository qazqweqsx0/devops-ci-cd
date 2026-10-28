function formatPrice(value) {
if (typeof value !== 'number' || Number.isNaN(value)) {
throw new TypeError('Price must be a number');
}
return `${value.toFixed(2)} ₽`;
}
function calculateTotal(items) {
if (!Array.isArray(items)) {
throw new TypeError('Items must be an array');
}
const total = items.reduce((sum, item) => {
if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
throw new TypeError('Each item must contain numeric price and quantity');
}
return sum + item.price * item.quantity;
}, 0);
return Number(total.toFixed(2));
}
module.exports = { formatPrice, calculateTotal };
