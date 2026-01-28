const number = Number(process.argv[2]);
const number2 = Number(process.argv[3]);

if (number % number2 === 0) {
	console.log("ist teilbar");
} else {
	console.log("ist NICHT teilbar");
}
