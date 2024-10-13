let users = []; 
let messages = []; 

export const createUser = (req, res) => {
    const { name, email, password } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Por favor, verifique se passou o nome.' });
    }
    if (!email) {
        return res.status(400).json({ message: 'Por favor, verifique se passou o email.' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Por favor, verifique se passou a senha.' });
    }

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email já cadastrado, insira outro.' });
    }
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    res.status(201).json({ message: `Seja bem-vindo ${name}! Pessoa usuária registrada com sucesso!` });
};

export const loginUser = (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Insira um e-mail válido.' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Insira uma senha válida.' });
    }
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Email não encontrado no sistema, verifique ou crie uma conta.' });
    }
    res.status(200).json({ message: `Seja bem-vindo ${user.name}! Pessoa usuária logada com sucesso!` });
};

export const createMessage = (req, res) => {
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
};

export { users, messages };



