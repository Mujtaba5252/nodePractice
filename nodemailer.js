const nodemailer=require('nodemailer');

let sender=nodemailer.createTransport({

service:'gmail',
auth:{
    user:'mujtabaali650@gmail.com',
    pass:'xbrgnhikiwojmoei'
}


});

var mailOptions = {
    from: 'mujtabaali650@gmail.com',
    to: 'sanajaved17098@gmail.com',
    subject: 'Alarm',
    template: 'email',
    text: 'hyyyyyyyyyyyyyyy '
  };


  sender.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });