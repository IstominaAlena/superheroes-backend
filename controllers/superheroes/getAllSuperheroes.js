const {Superhero} = require("../../models/superhero");

 const getAllSuperheroes = async(req, res) => {
	const { page = 1, limit = 5, nickname = ""} = req.query;
	const skip = (page - 1) * limit;

	const result = await Superhero.find(
		{
			nickname: {
				"$regex": nickname,
				"$options": "i"
			}
		},
		"-createdAt -updatedAt",
		{
			skip,
			limit: +limit,
			sort: {
				createdAt: -1
			}
		}
		);		

	const amount = await Superhero.count();

	res.status(200).json({ superheroes: result, amount });
 };

 module.exports = getAllSuperheroes;
 