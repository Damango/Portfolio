// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");

function writeToFile() {
	const content = "Some content!";

	fs.writeFile("../../../src/AuthDocuments/AuthTest.txt", content, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		//file written successfully
	});
}

export default function handler(req, res) {
	let body = req.body;

	writeToFile(body);

	res.status(200).json({ name: "John Doe" });
}
