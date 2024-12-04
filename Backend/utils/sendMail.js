const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Check if the recipient's email is provided
  if (!options.email) {
    throw new Error("No recipients defined");
  }

  // Create a transport instance using SMTP settings
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,  // Mailtrap SMTP host or your actual SMTP provider
    port: process.env.SMTP_PORT,  // SMTP port (587 for TLS)
    auth: {
      user: process.env.SMTP_EMAIL,  // Your SMTP email
      pass: process.env.SMTP_PASS,   // Your SMTP password
    },
  });

  // Define the email message details
  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,  // Sender email
    to: options.email,  // Recipient email
    subject: options.subject,  // Email subject
    text: options.message,  // Email body
  };

  // Send the email
  await transport.sendMail(message);
};

module.exports = sendEmail;
