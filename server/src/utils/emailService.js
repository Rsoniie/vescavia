import nodemailer from "nodemailer";
import config from "config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.get("independentEnvs.emailUser") || process.env.EMAIL_USER,
    pass: config.get("independentEnvs.appPassword") || process.env.APP_PASSWORD,
  },
});

async function sendMail({
  recipients,
  subject = "Mail sub",
  text = "Hello testing",
}) {
  const mailOptions = {
    from: config.get("independentEnvs.emailUser") || process.env.EMAIL_USER,
    to: recipients,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (err) {
    console.error("Email send error:", err);
    throw err;
  }
}

export default sendMail;
