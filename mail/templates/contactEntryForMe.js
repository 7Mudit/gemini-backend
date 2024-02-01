exports.contactUsEmailForMe = (userName) => {
  return `<!DOCTYPE html>
  <html>
  <head>
  <title>Contact Confirmation</title>
  <style>
    .email-container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .header {
      color: #333333;
      text-align: center;
      font-size: 24px;
      border-bottom: 2px solid #eeeeee;
      padding-bottom: 10px;
    }
    .content {
      color: #555555;
      text-align: center;
      padding: 20px 0;
    }
    .button {
      display: inline-block;
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px auto;
      text-align: center;
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      font-size: 12px;
      color: #aaaaaa;
    }
  </style>
  </head>
  <body>
  <div class="email-container">
    <div class="header">Learn to Code</div>
    <div class="content">
      <p>Thanks for contacting us, ${userName}!</p>
      <p>We appreciate your interest and are excited to have you embark on your coding journey with us. Your enthusiasm for learning is what drives us forward.</p>
      <a href="https://thelearntocode.com" class="button">Explore More</a>
      <p>We're here to support your growth every step of the way. If you have any questions or need further information, feel free to reach out.</p>
      <p>Thank you for choosing us to be a part of your learning path. Happy coding!</p>
    </div>
    <div class="footer">
      © 2024 Learn to Code. All rights reserved.<br>
      You're receiving this email because you expressed interest in us.
    </div>
  </div>
  </body>
  </html>
  
    `;
};
