"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
  success: boolean;
  message: string;
}

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }




  try {
    const data = await resend.emails.send({
      from: "Minhas Brothers Inquiry <info@minhasbrothers.com>",
      to: [process.env.CONTACT_RECIPIENT_EMAIL || "info@minhasbrothers.com"],
      subject: `New Export Inquiry from ${name} (${company || "N/A"})`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #059669;">New Business Inquiry Received</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "Not specified"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <h3>Inquiry Details:</h3>
          <p style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      return {
        success: false,
        message: data.error.message || "Failed to send message.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your inquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("Resend Error:", error);
    return {
      success: false,
      message: "An error occurred while sending your inquiry. Please try again.",
    };
  }
}