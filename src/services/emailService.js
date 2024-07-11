const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

const sendReferralEmail = async (toEmail, referralData) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: 'Referral Submitted Successfully',
      html: `<p>Dear User,</p>
             <p>Your referral has been submitted successfully.</p>
             <p>Details:</p>
             <ul>
               <li>Name: ${referralData.name}</li>
               <li>Email: ${referralData.email}</li>
               <li>Referred By: ${referralData.referredBy}</li>
             </ul>
             <p>Thank you.</p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send referral email');
  }
};

module.exports = {
  sendReferralEmail,
};
