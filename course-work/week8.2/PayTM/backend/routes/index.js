const express = require("express");
const userRouter = require('./user')
const accountsRouter = require('./accounts')
const router = express.Router();

//user routes
router.use("/user", userRouter)

//accounts routes
router.use("/account",accountsRouter)

module.exports =router;

