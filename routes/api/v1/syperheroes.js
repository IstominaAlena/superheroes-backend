const express = require("express");

const { ctrlWrapper, validation, uploadFile } = require("../../../middlewares");
const { schemas } = require("../../../models/superhero");
const {
	getAllSuperheroes,
	getSuperheroById,
	addSuperhero,
	deleteSuperhero,
	updateSuperheroInfo,
	updateSuperheroImages,
	deleteSuperheroImage,
} = require("../../../controllers/superheroes");

const router = express.Router();

router.get("/", ctrlWrapper(getAllSuperheroes));

router.get("/:id", ctrlWrapper(getSuperheroById));

router.post(
	"/",
	uploadFile.array("images", 10),
	// validation(schemas.superheroSchema),
	ctrlWrapper(addSuperhero)
);

router.delete("/:id", ctrlWrapper(deleteSuperhero));

router.put(
	"/:id",
	validation(schemas.superheroSchema),
	ctrlWrapper(updateSuperheroInfo)
);

router.patch(
	"/:id/images",
	uploadFile.array("images", 10),
	validation(schemas.updateSuperheroImage),
	ctrlWrapper(updateSuperheroImages)
);

router.patch(
	"/:id/images-to-delete",
	ctrlWrapper(deleteSuperheroImage)
);

module.exports = router;
