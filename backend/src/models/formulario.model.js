"use strict";
const mongoose = require("mongoose");

const formularioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,    
    },
    edad: {
      type: Number,
      required: true,  
    },
  },
);

const Formulario = mongoose.model("Formulario", formularioSchema);

module.exports = Formulario;
