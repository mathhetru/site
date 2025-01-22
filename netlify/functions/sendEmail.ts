const nodemailer = require('nodemailer');

import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Bad Request: No body provided' }),
    };
  }
	
  const { name, email, message } = JSON.parse(event.body);

  // Configurez votre transporteur SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Exemple avec Gmail
    auth: {
      user: 'your_email@gmail.com', // Remplacez par votre email
      pass: 'your_email_password', // Remplacez par votre mot de passe
    },
  });

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com', // Votre email pour recevoir les messages
    subject: `Nouveau message de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email envoyé avec succès.' }),
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erreur lors de l\'envoi de l\'email.' }),
    };
  }
};
