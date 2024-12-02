const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    packageName: String,
    version: String,
    difficulty: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    publishedBy: String,
    lastPublished: { type: Date, required: true },
    link: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'package', mySchema );