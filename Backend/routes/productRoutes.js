const express = require("express");
const router = express.Router();
const {processPayment, getkey, paymentVerification } = require("../controller/productController.js")

router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getkey);
router.route("/paymentVerification").post(paymentVerification);

module.exports = router;