# Sistema de Gerenciamento de Usuários e Mensagens

## Descrição do Projeto:
Este projeto é uma API desenvolvida com Node.js e Express.js, destinada a gerenciar usuários e mensagens. A estrutura foi organizada em endpoints separados para facilitar a manutenção e a escalabilidade do sistema.

## Funcionalidades:
**1**. Gerenciamento de Usuários
*Criação de Usuário*: Permite o cadastro de novos usuários, garantindo que informações como nome, e-mail e senha sejam fornecidas. O sistema valida se o e-mail já está cadastrado para evitar duplicidades.
Login de Usuário: Realiza a autenticação dos usuários, verificando as credenciais (e-mail e senha) informadas.

**2**. Gerenciamento de Mensagens
*Criação de Mensagens*: Usuários autenticados podem criar mensagens, fornecendo um título e uma descrição. O sistema valida se o usuário existe antes de permitir a criação da mensagem.
Visualização de Mensagens: Permite que os usuários visualizem suas mensagens cadastradas.
Motivação e Escolhas
A escolha de separar a funcionalidade de gerenciamento de usuários e mensagens em endpoints distintos visa melhorar a organização do código e a clareza da API. Isso facilita a manutenção e a implementação de futuras funcionalidades, além de permitir uma gestão mais eficiente das requisições.

As variáveis foram nomeadas de forma a serem descritivas e intuitivas, facilitando a leitura e compreensão do código.

## Tecnologias Utilizadas:
Node.js
Express.js
Cors
Postman (para testes)
**Deploy**
A aplicação foi implantada na plataforma Render, permitindo acesso remoto e testes por parte dos usuários.
