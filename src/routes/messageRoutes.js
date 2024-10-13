import express from 'express';
import { createMessage, users } from '../middleware/validation.js'; // Importe a função createMessage

const router = express.Router();

// Rota para criar uma nova mensagem
router.post('/', createMessage);

// Rota para obter mensagens por email
router.get('/:email', (req, res) => {
    const { email } = req.params;

    const userMessages = messages.filter(message => message.email === email);
    if (userMessages.length === 0) {
        return res.status(404).json({ message: 'Nenhuma mensagem encontrada para este email.' });
    }
    res.status(200).json({ message: 'Seja bem-vinde!', messages: userMessages });
});

// Rota para atualizar uma mensagem
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const message = messages.find(msg => msg.id === parseInt(id));
    if (!message) {
        return res.status(404).json({ message: 'Por favor, informe um id válido da mensagem.' });
    }
    
    if (!title || !description) {
        return res.status(400).json({ message: 'Por favor, verifique se passou o título e a descrição.' });
    }

    message.title = title;
    message.description = description;

    res.status(200).json({ message: 'Mensagem atualizada com sucesso!', messageData: message });
});

// Rota para deletar uma mensagem
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = messages.findIndex(msg => msg.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Mensagem não encontrada, verifique o identificador em nosso banco.' });
    }

    messages.splice(index, 1);
    res.status(200).json({ message: 'Mensagem apagada com sucesso!' });
});

export default router;





