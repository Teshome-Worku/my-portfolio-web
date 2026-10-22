const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, phone, projectType, budget, message }) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("EMAIL_USER or EMAIL_PASS not set. Skipping email notification.");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Project Inquiry from ${name} 🚀`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0A; color: #FFFFFF; border-radius: 12px; border: 1px solid #262626;">
          <h2 style="color: #BB4D00; margin-top: 0; font-size: 22px;">New Project Inquiry</h2>
          <p style="color: #A3A3A3; font-size: 14px;">You received a new inquiry from your portfolio contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #A3A3A3; width: 140px; border-bottom: 1px solid #262626;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid #262626;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #A3A3A3; border-bottom: 1px solid #262626;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid #262626;"><a href="mailto:${email}" style="color: #BB4D00; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #A3A3A3; border-bottom: 1px solid #262626;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid #262626;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #A3A3A3; border-bottom: 1px solid #262626;"><strong>Project Type:</strong></td>
              <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid #262626;">${projectType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #A3A3A3; border-bottom: 1px solid #262626;"><strong>Budget Range:</strong></td>
              <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid #262626;">${budget || "Prefer not to say"}</td>
            </tr>
          </table>

          <div style="background: #171717; padding: 18px; border-radius: 8px; border: 1px solid #262626; margin-top: 16px;">
            <p style="color: #A3A3A3; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;"><strong>Message:</strong></p>
            <p style="color: #E5E5E5; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent ✅");
  } catch (error) {
    console.error("Email error:", error);
  }
};

module.exports = sendEmail;
