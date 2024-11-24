const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    version: String,
    packageName: String,
    downloads: { type: Number, default: 0 },
    publishedBy: String,
    lastPublished: { type: Date, required: true },
    difficulty: { type: Number, default: 0 },
    link: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'package', mySchema );