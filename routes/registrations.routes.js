const express = require("express");

//Controllers
const {
  getAllRegisters,
  getRegisterById,
  createRegister,
  updateRegister,
  cancelRegister,
} = require("../controllers/registrations.controller");

const registrationsRouter = express.Router();

// ! Registrations endpoints

registrationsRouter.get("/", getAllRegisters);

registrationsRouter.get("/:id", getRegisterById);

registrationsRouter.post("/", createRegister);

registrationsRouter.patch("/:id", updateRegister);

registrationsRouter.delete("/:id", cancelRegister);

module.exports = { registrationsRouter };
