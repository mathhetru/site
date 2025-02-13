import { createTransport } from "nodemailer";

type body = {
  name: string;
  email: string;
  message: string;
};

export default defineEventHandler<{ body: body }>(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const transporter = createTransport({
    service: config.mailService,
    host: config.mailHost,
    port: 465,
    secure: true, // SSL use
    auth: {
      user: config.mailUsername,
      pass: config.mailPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const HTMLBodyContact = `
    <html>
        <body style="font-family: Roboto, sans-serif; color: black;">
            <div style="background-color: #F8F4F0; max-width: 700px; margin: 0 auto; padding: 20px; border-top: 10px solid black; border-bottom: 5px solid black;">
                <h2>Nouveau message de <span style="font-weight: bold">${body.name} depuis votre formulaire de contact</span></h2>
                <table style="width: 100%;">
                    <tr>
                        <td><span style="font-weight: bold;">Nom et prénom :</span> ${body.name}</td>
                    </tr>
                    <tr>
                        <td><span style="font-weight: bold;">Email :</span> ${body.email}</td>
                    </tr>
                    <tr>
                        <td><span style="font-weight: bold;">Message :</span> ${body.message}</td>
                    </tr>
                </table>
            </div>
        </body>
    </html>
    `;

  const HTMLBodyConfirmation = `
    <html>
        <body style="font-family: Roboto, sans-serif; color: black;">
            <div style="background-color: #F8F4F0; max-width: 700px; margin: 0 auto; padding: 20px; border-top: 10px solid black; border-bottom: 5px solid black;">
                <h2>Bonjour et merci, ${body.name}!</h2>
                <p style="font-size: 16px;">J'ai bien reçu votre message ci-joint et je vous répondrais au plus vite !</p>
                <table style="width: 100%;">
                    <tr>
                        <td><span style="font-weight: bold;">Votre nom et prénom :</span> ${body.name}</td>
                    </tr>
                    <tr>
                        <td><span style="font-weight: bold;">Adresse mail renseignée :</span> ${body.email}</td>
                    </tr>
                    <tr>
                        <td><span style="font-weight: bold;">Votre message :</span> ${body.message}</td>
                    </tr>
                </table>
                <p>A bientôt,</p>
                <p style="font-weight: bold;">Mathilde.</p>
            </div>
        </body>
    </html>
    `;

  const contactMail = {
    from: config.mailUsername,
    replyTo: `${body.name} <${body.email}>`,
    to: config.mailUsername,
    subject: `Nouveau message de ${body.name}.`,
    html: HTMLBodyContact,
  };

  const confirmationMail = {
    from: config.mailUsername,
    to: body.email,
    subject: "Confirmation de réception de votre message",
    html: HTMLBodyConfirmation,
  };

  try {
    await transporter.sendMail(contactMail);
    await transporter.sendMail(confirmationMail);
    setResponseStatus(event, 200);
  } catch (error) {
    setResponseStatus(event, 500);
    throw createError({
      statusCode: 500,
      statusMessage: `An error occurred while sending the email: ${error}`,
    });
  }
});
