const createError = require("http-errors");

function indexRouter(req, res, next) {
    res.json("API DE LOCADORA DE CARROS");
  }

  module.exports = {indexRouter}