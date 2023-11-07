const express = require("express")
const router = express.Router()
const {getContact,sendEmail} = require("../controllers/contactController")
const {check} = require("express-validator")
router.route("/").get(getContact)
router.route("/").post(
    [check("name").notEmpty().withMessage("Name cannot be empty"),
    check("email").notEmpty().isEmail().withMessage("Must be a Valid Email"),
    check("subject").notEmpty().withMessage("subject cannot be empty"),
    check("message").notEmpty().withMessage("message cannot be empty"),
]

,sendEmail)

module.exports = router