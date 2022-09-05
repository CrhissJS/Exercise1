// Model
const { Registration } = require("../models/registration.model");

const getAllRegisters = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegisterById = async (req, res) => {
  try {
    const { id } = req.params;

    const registerById = await Registration.findOne({ where: { id } });

    if (!registerById) {
      return res.status(404).json({
        status: "error",
        message: "Register not found",
      });
    }
    res.status(200).json({ status: "success", data: { registerById } });
  } catch (error) {
    console.log(error);
  }
};

const createRegister = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegister = await Registration.create({
      entranceTime,
    });

    res.status(201).json({
      status: "success",
      data: {
        newRegister,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegister = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: "error",
        message: "Register not found",
      });
    }
    await register.update({ exitTime, status: "out" });

    res.status(200).json({ status: "success", data: { register } });
  } catch (error) {
    console.log(error);
  }
};

const cancelRegister = async (req, res) => {
  try {
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: "error",
        message: "Register not found",
      });
    }

    await register.update({ status: "cancelled" });

    res.status(204).json({ status: "success", data: { register } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegisters,
  getRegisterById,
  createRegister,
  updateRegister,
  cancelRegister,
};
