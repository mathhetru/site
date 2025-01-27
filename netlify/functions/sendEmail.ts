const nodemailer = require('nodemailer');
require('dotenv').config() ;

import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed !' }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Bad Request: No body provided !' }),
    };
  }
	
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: process.env.ACCOUNT_SERVICE, 
    auth: {
      user: process.env.ACCOUNT_EMAIL, 
      pass: process.env.ACCOUNT_PASSWORD, 
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.ACCOUNT_EMAIL, 
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
