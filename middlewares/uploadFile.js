const multer = require("multer");

const multerConfig = multer.diskStorage({
	destination: "temp/",
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	}
});

const uploadFile = multer({ storage: multerConfig });

module.exports = uploadFile;
