const prom = new Promise (
	(resolve, reject) => {
		setTimeout(
			() => {
				// resolve after 2 seconds
				resolve();
			},
			2000
		);
	}
);

// prom.then(
// 	() => {
// 		console.log('Resolved after 2 seconds');
// 	}
// );

async function doSomething() {
	await prom;
	console.log("This should appear after 2 seconds");
}

doSomething();