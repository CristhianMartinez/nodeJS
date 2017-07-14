var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'youremail@gmail.com',
		pass: ''
	}
});

var mailOptions = {
	from: 'youremail@gmail.com',
	to: 'emailrece@hotmail.com, myotherfriend@yahoo.com',
	subject: 'Envio de Email usando NodeJs',
	text: 'That was easy!'
	//html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error)
		console.log(error);
	else
		console.log('Email sent: ' + info.response);
});