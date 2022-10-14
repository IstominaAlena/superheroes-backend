const createError = require("http-errors");

const { Superhero } = require("../../models/superhero");

const deleteSuperhero = async (req, res) => {
	const { id } = req.params;

	const result = await Superhero.findByIdAndDelete(id);

	if (!result) {
		throw createError(404, "Not found");
	};

	res.status(200).send();
};

module.exports = deleteSuperhero;
