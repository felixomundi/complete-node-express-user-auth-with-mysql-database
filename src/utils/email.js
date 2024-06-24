require("dotenv").config();
const nodemailer = require("nodemailer");
async function mail(sent_to_email, subject, message) {

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, 
    port: 587, 
    secure:  false, 
    auth: {
      user: process.env.MAIL_USERNAME, 
      pass: process.env.MAIL_PASSWORD, 
      
    },
    tls: {
      rejectUnauthorized: false,
    },

  }); 
  await transporter.sendMail({
    from: process.env.MAIL_FROM_ADDRESS,
    to: sent_to_email,
    subject: subject,
    html: message,
  });


}

module.exports = {mail};
