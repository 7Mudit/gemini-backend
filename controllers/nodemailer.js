const nodemailer = require("nodemailer");
const { contactUsEmailForMe } = require("../mail/templates/contactEntryForMe");

exports.mailSender = async (req, res) => {
  try {
    const { userName, message, email } = req.body;
    if (!userName || !email || !message) {
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "Learn To Code",
      to: `${email}`,
      subject: `Feedback Recieved by Us`,
      html: contactUsEmailForMe(userName),
    });
    return res.status(200).json({
      success: true,
      message: "Your message was sent succesfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
