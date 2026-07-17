"use server";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // For now, just log it — later this is where you'd send an email
    // (e.g. via Resend, SendGrid, or a database insert)
    console.log("New contact submission:", { name, email, message });

    // Basic validation
    if (!name || !email || !message) {
        return { success: false, error: "All fields are required." };
    }

    return { success: true };
}