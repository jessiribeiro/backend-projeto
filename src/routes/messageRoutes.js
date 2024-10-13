import express from 'express';

let messages = []; 
const router = express.Router();

router.post('/', (req, res) => {
    const { email, title, description } = req.body;

    const user = users.find(user => user.email === email); 
    if (!user) {
        return res.status(404).json({ message: 'Email não encontrado, verifique ou crie uma conta' });
    }

    if (!title || !description) {
        return res.status(400).json({ message: 'Por favor, verifique se passou o título e a descrição.' });
    }

    const newMessage = { id: messages.length + 1, email, title, description };
    messages.push(newMessage);
    res.status(201).json({ message: 'Mensagem criada com sucesso!', messageData: newMessage });
});

router.get('/:email', (req, res) => {
    const { email } = req.params;

    const userMessages = messages.filter(message => message.email === email);
    if (userMessages.length === 0) {
        return res.status(404).json({ message: 'Nenhuma mensagem encontrada para este email.' });
    }
    res.status(200).json({ message: 'Seja bem-vinde!', messages: userMessages });
});

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




