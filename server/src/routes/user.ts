import express from "express";
import userController from "../controller/userController";

const router = express.Router();

router.route('/generatePassword').post(userController.PasswordGenerator);
// router.post('/passwordGenerator', (req, res) => {
//     console.log(req.body);
// })

export default router; 