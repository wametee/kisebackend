import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '../config/env.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

export const sendEmailWithGuide = async (to, name) => {
  const mailOptions = {
    from: EMAIL_USER,
    to,
    subject: 'Your Free Career Guide',
    text: `Hi ${name},\n\nThank you for downloading your free Career Guide!\n\n[Download Your Guide Here]\n\nAt KISE College, we help students like you gain hands-on training, real industry exposure, and guaranteed job placements.\n\nJoin Our Next Open Day! Click here to register: [Open Day Link]\n\nSee you soon!\n\nYour Name\nKISE College Admissions Team`,
    attachments: [
      {
        filename: 'CareerGuide.pdf',
        path: './path/to/CareerGuide.pdf',
        contentType: 'application/pdf'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
  }
};