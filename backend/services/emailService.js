const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

async function sendBudgetAlert(total) {
  try {
    const limit = process.env.BUDGET_LIMIT;

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.BREVO_API_KEY,
      },
    });

    const message = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Budget limit exceeded",
      text: `Total expenses: $${total} exceed your limit of $${limit}.`,
    };

    await transporter.sendMail(message);
    console.log("Budget email alert send!");
  } catch (err) {
    console.log("Email message failed! " + err);
  }
}

module.exports = sendBudgetAlert;
