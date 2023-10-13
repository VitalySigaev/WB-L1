const dateUtils = require('./script'); // Путь к вашему модулю

const today = new Date();
const formattedDate = dateUtils.formatDate(today, 'YYYY-MM-DD');
console.log('Отформатированная дата:', formattedDate);

const futureDate = dateUtils.addDays(today, 7);
console.log('Дата через 7 дней:', futureDate);
