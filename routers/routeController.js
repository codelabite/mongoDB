const express = require("express");
const mongoose = require("mongoose");

const DataRoute = require("../models/controlViewer");

const routerSchema = express.Router();

routerSchema.get("/", async (req, res) => {
  try {
    const getData = await DataRoute.find();
    res.json(getData);
  } catch (error) {
    console.log("Error: " + error);
  }
});

routerSchema.patch("/:id", async (req, res) => {
  try {
    const editData = await DataRoute.findById(req.params.id);
    editData.done = req.body.done;
    const finalEdited = await editData.save();
    res.json(finalEdited);
  } catch (error) {
    console.log("Error: " + error);
  }
});

routerSchema.delete("/:id", async (req, res) => {
  try {
    const editData = await DataRoute.findById(req.params.id);
    const finalEdited = await editData.delete();
    res.json(finalEdited);
  } catch (error) {
    console.log("Error: " + error);
  }
});

routerSchema.post("/", async (req, res) => {
  const refinePost = DataRoute({
    title: req.body.title,
    detail: req.body.detail,
    remake: req.body.remake,
    done: req.body.done,
  });

  try {
    const viewEdidtedPost = refinePost.save();
    res.json(viewEdidtedPost);
  } catch (error) {
    console.log("Error: " + error);
  }
});

module.exports = routerSchema;
