const mongoose = require('mongoose');

const drugSchema = mongoose.Schema({
    DrugName:{type: String,require: true,unique: true},
    power:{type: String,required:true},
    Price:{type: String,required: true}
});

const Drug = mongoose.model('Drug',drugSchema);

module.exports = {Drug};