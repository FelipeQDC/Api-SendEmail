const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.post('/api/enviar-email', (req, res) => {
  const texto = req.body.texto;
const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: '587',
    secure: false,
    auth:{
        user:'adsfasdfasdfdfsdf0909@outlook.com.br',
        pass:'09876543210909Web',
    },
});

transport.sendMail({
    from:'Email Automatico de FeedBack <emailweb995@gmail.com>',
    to: 'emailweb995@gmail.com',
    subject: 'Feedback',
    text: texto
})
.then((Response) => console.log('Email mandado com sucesso'))
.catch((err) => console.log('Erro ao enviar email:', err));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
