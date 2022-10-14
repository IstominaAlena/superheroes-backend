const createError = require("http-errors");

const { Superhero } = require("../../models/superhero");

const deleteSuperheroImage = async (req, res) => {
	const { id } = req.params;
	const { image } = req.query;

	const superhero = await Superhero.findById(id);

	if (!superhero) {
		throw createError(404, "Not found");
	};

	const images = superhero.images.filter((item) => item !== image);

	const result = await Superhero.findByIdAndUpdate(id, { images }, { new: true });

	if (!result) {
		throw createError(400, "Missing fields");
	};

	res.status(200).json(result);
};

module.exports = deleteSuperheroImage;
