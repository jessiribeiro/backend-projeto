import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';   
import messageRoutes from './routes/messageRoutes.js'; 
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo à aplicação!');
});

app.use('/api/users', userRoutes);

app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


