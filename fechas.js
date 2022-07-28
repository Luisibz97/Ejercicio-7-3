const currentDate = new Date();

const myBirthday = new Date(1997, 8, 5);

const dateComparison = currentDate > myBirthday;

const myBirthdayDay = myBirthday.getDay();

const myBirthdayMonth = myBirthday.getMonth() + 1;

const myBirthdayYear = myBirthday.getFullYear();

console.log(currentDate);

console.log(myBirthday);

console.log(dateComparison);

console.log(myBirthdayDay);

console.log(myBirthdayMonth);

console.log(myBirthdayYear);
