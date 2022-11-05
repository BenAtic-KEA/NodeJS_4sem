import nodemailer from "nodemailer";

export async function sendAutoMail(contact={email:"email", name:"Anonymous"}){

    try {
        
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'My first Nodemailer" <First_Mailer@mail.com>', // sender address
            to: contact.email, // list of receivers
            subject: "AUTO-Reply - Thanks for your mail", // Subject line
            text: `Hello ${contact.name}\n \n Your mail is notified and we will reply as soon as possible. \n \n have a nice day!`, // plain text body
        });
        
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return `Message sent!`
        
    } catch (error) {
        console.log(error)
        return error;
    }
}
    