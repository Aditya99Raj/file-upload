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
//   check for undefined
    if (!file) {
      return cb(new Error("No file uploaded"), false);
    }
//   check for file type
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg", "application/pdf"];
  
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept file
    } else {
      cb(new Error("Only .png, .jpg, .jpeg, and .pdf formats are allowed!"), false); // Reject if unknown file type
    }
  };
  



const upload = multer({storage,fileFilter});

module.exports = upload;