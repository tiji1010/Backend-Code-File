const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});

module.exports=mongoose.model('Blog', BlogPost);