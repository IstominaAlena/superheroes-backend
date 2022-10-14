const { Schema, model } = require("mongoose");
const Joi = require("joi");

const superheroSchema = Schema({
	nickname: {
		type: String,
		minlength: [ 2, "should contain at least 2 characters." ],
		maxlength: [ 15, "shouldn't contain more than 15 characters." ],
		unique: true,
		required: [ true, "Request body should contain \"nickname\" field." ]
	},
	real_name: {
		type: String,
		default: "Unknown"
	},
	origin_description: {
		type: String,
		minlength: [ 2, "should contain at least 2 characters." ],
		required: [ true, "Request body should contain \"origin_description\" field." ]
	},
	superpowers: {
		type: String,
		minlength: [ 2, "should contain at least 2 characters." ],
		required: [ true, "Request body should contain \"superpowers\" field." ]
	},
	catch_phrase: {
		type: String,
		minlength: [ 2, "should contain at least 2 characters." ],
		required: [ true, "Request body should contain \"catch_phrase\" field." ]
	},
	images: {
		type: [ String ],
		default: []
	}
}, { versionKey: false, timestamps: true });

const Superhero = model("superheroes", superheroSchema);

const joiSuperheroSchema = Joi.object({
	nickname: Joi.string().min(2).max(15).required(),
	real_name: Joi.string(),
	origin_description: Joi.string().min(2).required(),
	superpowers: Joi.string().min(2).required(),
	catch_phrase: Joi.string().min(2).required(),
	images: Joi.array().items(Joi.string())
});

const joiUpdateSuperheroImagesSchema = Joi.object({
	images: Joi.array().items(Joi.string())
});

module.exports = {
	Superhero,
	schemas: {
		superheroSchema: joiSuperheroSchema,
		updateSuperheroImage: joiUpdateSuperheroImagesSchema,
	}
};
