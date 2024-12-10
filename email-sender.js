// email-sender.js
const nodemailer = require('nodemailer');

// Créer un transporteur
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre-email@gmail.com',
        pass: 'votre-mot-de-passe'
    }
});

// Définir les options de l'email
let mailOptions = {
    from: 'votre-email@gmail.com',
    to: 'destinataire-email@gmail.com',
    subject: 'Test Email',
    text: 'Hello from Node.js'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
