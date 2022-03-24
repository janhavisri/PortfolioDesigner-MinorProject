const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    fullname: String,
    description: String,
    heroimage: String,
    personaldetails: Object,
    qualification: Object,
    experience: Object,
    contact: String,
    created: Date
})

const model = mongoose.model('portfolio', schema);

module.exports = model;