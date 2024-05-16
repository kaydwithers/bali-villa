import { Twilio } from "twilio";

// @TODO: Setup Twilio

// export default async function handler(req, res) {
//   const { phoneNumber, message } = req.body;

//   const client = new Twilio(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN,
//   );

//   try {
//     const sentMessage = await client.messages.create({
//       body: message,
//       from: "whatsapp:your_twilio_whatsapp_number",
//       to: `whatsapp:${phoneNumber}`,
//     });

//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "WhatsApp message sent successfully",
//         data: sentMessage,
//       });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to send WhatsApp message" });
//   }
// }
