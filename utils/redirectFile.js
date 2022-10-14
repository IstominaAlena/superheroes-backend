const fs = require("fs/promises");
const path = require("path");

const redirectFile = async (array) => {
	array?.forEach(async (file) => {
		try {
			const finalUpload = path.join("public", "superheroes", file.filename);
			await fs.rename(file.path, finalUpload);
		} catch (error) {
			fs.unlink(file.path);
		}
	});
};

module.exports = redirectFile;
