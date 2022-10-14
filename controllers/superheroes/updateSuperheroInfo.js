const createError = require("http-errors");

const { Superhero } = require("../../models/superhero");

const updateSuperheroInfo = async (req, res) => {
	const { id } = req.params;
	const result = await Superhero.findByIdAndUpdate(id, req.body, { new: true });

	if (!result) {
		throw createError(400, "Missing fields");
	};

	res.status(200).json(result);
};

module.exports = updateSuperheroInfo;
