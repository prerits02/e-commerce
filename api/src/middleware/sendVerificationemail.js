import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendVerificationEmail = async (email, code) => {
  await transporter.sendMail({
    from: `"Auth System" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Verification Code",
    text: `Your verification code is: ${code}`
  });
};

export default sendVerificationEmail;
