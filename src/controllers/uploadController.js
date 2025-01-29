const uploadFile = (req, res) => {
    if(!req.file) {
        return res.status(400).json(({error: "No file uploaded or invalid file type"}))
    }

    res.json({
        message: 'file uploaded successfully',
        fileUrl : `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
    });
};

export default {uploadFile}