/* 提取字符串中的数字 */
const main = str => Number(str.match(/((\-)?[0-9]+(\.[0-9]+)?){1}/)[0]);

module.exports = main;
