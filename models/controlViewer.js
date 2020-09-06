const express = require("express");
const mongoose = require("mongoose");

const viewSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },

  remake: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("DataRoute", viewSchema);
