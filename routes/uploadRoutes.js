import express from 'express';
import upload from '../middleware/multer.js';
import { uploadImage } from '../controllers/uploadController.js';

const router = express.Router();

// POST request to upload an image
router.post('/', upload.single('image'), uploadImage);

export default router;
