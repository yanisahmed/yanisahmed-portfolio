"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "All fields are required." };
    }

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "yanisahmed12@gmail.com",
            subject: `New message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send failed:", error);
        return { success: false, error: "Failed to send message." };
    }
}