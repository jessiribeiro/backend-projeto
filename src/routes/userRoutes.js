import express from 'express';
import { createUser, loginUser } from '../middleware/validation.js';

const router = express.Router();

router.post('/signup', createUser);


router.post('/login', loginUser);

export default router;

