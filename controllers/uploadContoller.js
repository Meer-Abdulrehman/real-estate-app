export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No file uploaded or invalid file format',
    });
  }

  res.status(200).json({
    success: true,
    message: 'Image uploaded successfully',
    path: `uploads/${req.file.filename}`, 
    fileName: req.file.filename,
  });
};
