// import React, { useState } from "react";

// const EmailTemplate = () => {
//   const [sert, setSert] = useState("gggdsdasadsadsadsa");
//   const email = "recipient@example.com"; // The recipient's email address
//   const subject = "Welcome to Our Service";
//   const body = `
//     Hello,
//     ${sert}
//     Welcome to our service! We're excited to have you with us.
// <img src='' />
//     Please feel free to reach out if you have any questions.

//     Best regards,
//     Your Company
//   `;

//   // Encode the subject and body to make sure they work in the mailto URL
//   const encodedSubject = encodeURIComponent(subject);
//   const encodedBody = encodeURIComponent(body);

//   // Construct the mailto link (for default mail client)
//   const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

//   // Construct the Gmail link
//   const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
//   window.open(gmailLink, "_blank");

//   return (
//     <div>
//       <h2>Send Email</h2>
//       <p>Click the button below to send a pre-defined email:</p>

//       {/* Button that opens the default email client with pre-filled subject and body */}
//       <a href={mailtoLink}>
//         <button
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Send Pre-filled Email (Default Client)
//         </button>
//       </a>

//       <br />

//       {/* Button that opens Gmail with pre-filled subject and body */}
//       <a href={gmailLink}>
//         <button
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#4285F4", // Gmail blue
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             marginTop: "10px",
//           }}
//         >
//           Send Pre-filled Email (Gmail)
//         </button>
//       </a>
//     </div>
//   );
// };

// export default EmailTemplate;




// import React from "react";

// const WhatsAppShareButton = ({ product }) => {
//   // Construct the message dynamically based on the product details
//   const message = `Check out this product: ${product.name}! It's only $${product.price}. You can view it here: ${product.url}`;

//   // URL-encode the message
//   const encodedMessage = encodeURIComponent(message);

//   // Construct the WhatsApp Web share URL
//   const whatsappUrl = `https://web.whatsapp.com/send?text=${encodedMessage}`;

//   const handleShare = () => {
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <button
//       onClick={handleShare}
//       style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
//     >
//       Share on WhatsApp Web
//     </button>
//   );
// };

// export default WhatsAppShareButton;

// const messengerUrl =
//   "https://m.me/YOUR_PAGE_USERNAME?ref=Hi!%20I%20have%20a%20question";


// React component that opens the SMS app with pre-filled message
// const SendSMSButton = () => {
//   const phoneNumber = "+91 8779030638"; // Replace with actual phone number
//   const message = "Hello, I have a question!";

//   const handleSMSClick = () => {
//     window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
//       message
//     )}`;
//   };

//   return <button onClick={handleSMSClick}>Send SMS</button>;
// };

// export default SendSMSButton;


import React from "react";
import WhatsAppShareButton from "./email";

const Imagce = () => {
  // Example product data
  const product = {
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    url: "https://example.com/products/wireless-headphones",
  };

  return (
    <div>
      <h1>Product Share on WhatsApp</h1>
      <WhatsAppShareButton product={product} />
    </div>
  );
};

export default Imagce;
