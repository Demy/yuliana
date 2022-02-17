const nodemailer = require('nodemailer');

module.exports = function(app) {
  app.post('/api/email', function(request, response) {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    var textBody = `ОТ: ${request.body.name}, EMAIL: ${request.body.email}. СООБЩЕНИЕ: ${request.body.message}`;
    var htmlBody = `<h2>Сообщение из формы обратной связи</h2>
      <p>От: ${request.body.name} (<a href='mailto:${request.body.email}'>${request.body.email}</a>)</p>
      <p>Сообщение:</p>
      <p>${request.body.message}</p>
      <small>Отправлено: ${new Date(Date.now()).toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}</small>`;
    var mail = {
      from: process.env.EMAIL_SENDER,
      to: request.body.email,
      subject: 'Новое сообщение с сайта',
      text: textBody,
      html: htmlBody
    };

    transporter.sendMail(mail, function (err, info) {
      if(err) {
        console.log(err);
        response.json({ message: 'message not sent: an error occured; check the server\'s console log' });
      }
      else {
        response.json({ message: `message sent: ${info.messageId}` });
      }
    });
  });
}