const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.route("/create").post(userController.createContact)
router.route("/getContacts").get(userController.getContacts)
router.route("/findContact/:id").get(userController.findContact)
router.route("/updateContact/:id").post(userController.updateContact)
router.route("/deleteContact/:id").post(userController.deleteContact)



module.exports = router;