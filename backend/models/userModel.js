const express = require("express");
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    name:{
        type: String, 
    },
    phonenumber:{
        type: String
    }
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;