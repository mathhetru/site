const nodemailer = require('nodemailer');
require('dotenv').config() ;

console.log("PROUT");

export const handler = async (event) => {
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
    service: process.env.MYSERVICE, 
    auth: {
      user: process.env.MYEMAIL, 
      pass: process.env.MYPASSWORD, 
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MYEMAIL, 
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
