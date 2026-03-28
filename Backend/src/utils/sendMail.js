const axios = require("axios");

const sendMail = async ({ to, subject, text, attachments = [] }) => {
  try {

    const payload = {
      sender: {
        name: "Santosh",
        email: "santoshahirwar7254@gmail.com"
      },
      to: [{ email: to }],
      subject,
      htmlContent: `<pre>${text}</pre>`
    };

    //  only add attachment if exists
    if (attachments.length > 0) {
      payload.attachment = attachments.map(file => ({
        name: file.filename,
        content: file.content.toString("base64")
      }));
    }

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("SUCCESS", response.data);
    return { success: true };

  } catch (error) {
    console.log("ERROR FULL ", error.response?.data || error.message);
    return { success: false };
  }
};

module.exports = sendMail;