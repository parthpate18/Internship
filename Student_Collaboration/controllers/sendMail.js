/*
Name of the module: Admin Section

Date of module Creation: 25/05/2024

Author of the module: Parth patel


What the module does: Mails user the activation link to activate account, reset password

Functions supported:
1. sendEmail => Input: to, url, txt, msg; Output: "Mail sent successfully"

Global variables: ---
*/

const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;
// const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

// const {
//     MAILING_SERVICE_CLIENT_ID,
//     MAILING_SERVICE_CLIENT_SECRET,
//     MAILING_SERVICE_REFRESH_TOKEN,
//     SENDER_EMAIL_ADDRESS
// } = process.env;

// const oauth2Client = new OAuth2(
//     MAILING_SERVICE_CLIENT_ID,
//     MAILING_SERVICE_CLIENT_SECRET,
//     MAILING_SERVICE_REFRESH_TOKEN,
//     OAUTH_PLAYGROUND
// );

// send mail
const sendEmail = (to, url, txt, msg) => {
    // oauth2Client.setCredentials({
        //     refresh_token: MAILING_SERVICE_REFRESH_TOKEN
        // });
        console.log("Welcome", process.env.Admin_email, process.env.Admin_password)
        // const accessToken = oauth2Client.getAccessToken()
        const smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "parth.p2300@gmail.com",
                pass: "tnzb tqvc tysr bfai",            
            }
        });
        
        const mailOptions = {
            from: "parth.p2300@gmail.com",
            to: to,
            subject: "Project Collaboration Tool",
            html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to PCT.</h2>
            <p>
                ${msg}
                </p>
                
                <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
                
                <p>This unique URL is valid only for 30 minutes. If the button doesn't work for any reason, you can also click on the link below:</p>
            
            <div>${url}</div>
            </div>
            `
        }
        console.log("Mail Options", mailOptions)
        smtpTransport.sendMail(mailOptions, (err, info) => {
            if (err){
                console.log(err);
                return err;
            } 
            console.log("Info ", info);
            return info;
        });
}

module.exports = sendEmail;