var str = "Abu Bokor Suraj, Bangladesh";
const regexpression = /b/gi;
const count = str.match(regexpression).length;
console.log(count)