const uploadFile = (req, res) => {
    console.log(req.file,"upload file")
    if(!req.file) {
        return res.status(400).json(({error: "No file uploaded or invalid file type"}))
    }

    res.json({
        message: 'file uploaded successfully',
        fileUrl : `${req.protocol} ://${req.get("host")}/uploads/${req.file.filename}`,
    });
};

module.exports = {uploadFile}