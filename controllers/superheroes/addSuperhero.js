const fs = require("fs/promises");
const path = require("path");

const { Superhero } = require("../../models/superhero");
const redirectFile = require("../../utils/redirectFile");

const addSuperhero = async (req, res) => {
	const { files, body } = req;

	redirectFile(files);

	const images = files?.map((file) => path.join("superheroes", file.filename));
	const result = await Superhero.create({ ...body, images });

	res.status(201).json(result);
};

module.exports = addSuperhero;
