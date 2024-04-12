const nodemailder = require('nodemailer');

class MailSender {
  constructor() {
    this._tarnsporter = nodemailder.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Notes App',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      text: 'Terlampir hasil dari ekspor catatan',
      attachments: [
        {
          filename: 'notes.json',
          content,
        },
      ],
    };

    return this._tarnsporter.sendMail(message);
  }
}

module.exports = MailSender;
