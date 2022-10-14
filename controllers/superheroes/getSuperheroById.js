const createError = require("http-errors");

const {Superhero} = require("../../models/superhero");

const getSuperheroById = async(req, res) => {
	const { id } = req.params;
	const result = await Superhero.findById(id);

	if (!result) {
		throw createError(404, "Not found");
	};

	res.status(200).json(result);
};

module.exports = getSuperheroById;
