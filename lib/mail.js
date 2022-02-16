// Import
const nodemailer = require('nodemailer');

// Initialise Transport Object
const transport = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'xrgifxqlukk4yx25@ethereal.email',
        pass: 'vTdrU3sj1kjShGdfS6'
    }

});

// Send mail with mailOption object as config param
const send = async mailOptions => {
	return await transport.sendMail(mailOptions)
}

// Email teacher and global admins upon booking placement
exports.notification = async (id) => {
    console.log("sendimg mail")
	
	// Send email with html
	send({
		from: '"MET Record System" <met@hospital.com>',
		to: "icu_manager@hospital.com",
		subject: "MET Record Notification",
		text: `A new MET record has been submitted.`,
		html: `<p>Greetings,&nbsp;</p> 
        <p>This is an automated message to notify you that a new MET record has been submitted.&nbsp;</p>
        <p>Please click <a href="http://localhost:3000/?id=${id}">here</a> to view the Record.
        <p>Thank you</p>`
	});
}
// This file is then imported into the editor page, and the "mail.send() function is called upon form submition"


