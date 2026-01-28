const number = Number(process.argv[2]);

if (number % 3 === 0) {
	console.log("ist durch 3 teilbar");
} else {
	console.log("ist NICHT durch 3 teilbar");
}
