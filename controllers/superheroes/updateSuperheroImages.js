const path = require("path");

const { Superhero } = require("../../models/superhero");
const redirectFile = require("../../utils/redirectFile");

const updateSuperheroImages = async (req, res) => {
	const { files } = req;
	const { id } = req.params;

	redirectFile(files);

	const images = files.map((file) => path.join("superheroes", file.filename));

	const superhero = await Superhero.findById(id);

	if (!superhero) {
		throw createError(404, "Not found");
	};

	const result = await Superhero.findByIdAndUpdate(
		id,
		{ images: superhero.images.concat(images) },
		{ new: true }
	);

	if (!result) {
		throw createError(400, "The field \"images\" is missed");
	};

	res.status(200).json(result);
};

module.exports = updateSuperheroImages;
