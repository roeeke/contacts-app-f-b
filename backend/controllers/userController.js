const Blog = require("../models/userModel");

exports.createContact = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.send(newBlog);
    console.log("user created");
  } catch (err) {
    res.send(err);
  }
};

exports.getContacts = async (req, res) => {
  try {
    const getcontacts = await Blog.find({});
    res.send(getcontacts);
  } catch (err) {
    res.send(err);
  }
};

exports.findContact = async (req, res) => {
  try {
    const findcontact = await Blog.findById(req.params.id);
    res.send(findcontact);
  } catch (err) {
    res.send(err);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatecontact = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(updatecontact);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const deletecontact = await Blog.findByIdAndDelete(req.params.id, req.body);
    res.send(deletecontact);
  } catch (err) {
    res.send(err);
  }
};

