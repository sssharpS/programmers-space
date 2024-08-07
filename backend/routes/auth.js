const express = require('express');
const router=express.Router();
const authController=require('../controllers/authControllers');
const authentication=require('../middlewares/authentication');
const activateController=require('../controllers/activateControllers');
const roomControllers=require('../controllers/roomControllers');



//create endpoints - request for server generating otp
router.post('/api/send-otp',authController.sendOtp);

router.post('/api/send-otpEmail',authController.sendOtpViaEmail);

router.post('/api/verify-otp',authController.verifyOtp);

router.post('/api/activate-user',authentication.auth,activateController.activateUser);

router.get('/api/verify-token',authController.verifyToken);
router.post('/api/logout',authentication.auth,authController.logOut);

router.get('/api/rooms',authentication.auth,roomControllers.fetchRooms);

router.post('/api/create-room',authentication.auth,roomControllers.createRooms);

router.post('/api/deleteAccount',authentication.auth,authController.deleteAcc);


module.exports=router;