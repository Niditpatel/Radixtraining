const mongoose = require('mongoose');
const aggregate = require('mongoose').Aggregate;
const Joi = require('joi');

mongoose.connect('mongodb://localhost/mydb').then(() => console.log("connected")).catch(e => console.log(e.message));

const schema = Joi.object({
    a: Joi.string()
});

const { error, value } = schema.validate({ a: 1 });
if(error)
console.log(error.message);
else
console.log(value);