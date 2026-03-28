const sendMail = require("../utils/sendMail");

const SendMails = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const text = `
Name: ${name}
Email: ${email}
Message: ${message}
`;

    const result = await sendMail({
      to: process.env.SMTP_MAIL,
      subject: "New Contact Message",
      text
    });

    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: "Error sending email"
      });
    }

    res.json({
      success: true,
      message: "Message sent Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    });
  }
};

module.exports = { SendMails };