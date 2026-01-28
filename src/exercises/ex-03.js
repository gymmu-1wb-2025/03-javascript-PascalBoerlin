const name = process.argv[2];
let age = process.argv[3];

age = Number(age);
console.log(`Hallo ${name}!`);
console.log(`Du bist aktuell ${age} Jahre alt.`);
console.log(`An der Matur wirst du voraussichtlich ${age + 4} Jahre alt sein.`);
