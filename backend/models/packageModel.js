const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    packageName: String,
    version: String,
    lastPublished: String,
    difficulty: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    publishedBy: String,
    link: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'package', mySchema );