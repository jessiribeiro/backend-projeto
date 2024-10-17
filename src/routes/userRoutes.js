import express from 'express';
import { createUser, loginUser, users } from '../middleware/validation.js'; 

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);

router.get('/:email', (req, res) => {
    const { email } = req.params;
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
});

export default router;
