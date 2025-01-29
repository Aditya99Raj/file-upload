const multer = require('multer');
const path = require('path');
const fs = require('fs');


if(!fs.existsSync("uploads")){
    fs.mkdirSync("uploads");
}


const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        cb(null , `${Date.now()} - ${file.originalname}`)
    },
});

const fileFilter = (req, file, cb) => {
  
    if (!file) {
      return cb(new Error("No file uploaded"), false);
    }
  
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg", "application/pdf"];
  
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept file
    } else {
      cb(new Error("Only .png, .jpg, .jpeg, and .pdf formats are allowed!"), false);
    }
  };
  



const upload = multer({storage,fileFilter});

module.exports = upload;