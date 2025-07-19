import sendMail from "../utils/emailService.js";
import config from "config";
const emailServicesController = async (request, reply) => {
  try {
    const { clientEmail, subject, text } = request.body;
    const to =
      config.get("independentEnvs.usersToNotify") || process.env.EMAILS;
    const recipients = to ? to.split(",") : Map((email) => email.trim());
    recipients.push(clientEmail);
    console.log("Sending email to:", recipients);
    await sendMail({ recipients, subject, text });
    console.log("Email sent successfully");
    return reply.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in emailServicesController:", error);
    throw error;
  }
};

export default emailServicesController;
