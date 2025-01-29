const express = require('express');
const upload = require("../config/multerConfig");
const apiLimiter = require("../config/rateLimiter");
const {uploadFile} = require("../controllers/uploadController").default

const router = express.Router();

router.post("/", apiLimiter,upload.single("file"),uploadFile );

module.exports = router;