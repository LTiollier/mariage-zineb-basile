import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Honeypot validation - check if bot filled the hidden field
        if (body.website) {
            return NextResponse.json(
                { error: "Spam detected" },
                { status: 400 }
            );
        }

        // Validate required fields
        const { attendance, name, email, phone, hasChildren, childrenCount, dietary } = body;

        if (!attendance || !name || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Initialize Brevo API client
        const apiInstance = new brevo.TransactionalEmailsApi();
        apiInstance.setApiKey(
            brevo.TransactionalEmailsApiApiKeys.apiKey,
            process.env.BREVO_API_KEY || ""
        );

        const emailParams = {
            name,
            phone,
            attendance: attendance === "oui" ? "Oui, avec plaisir" : "Non, désolé",
            hasChildren: hasChildren || "non",
            childrenCount: childrenCount || "0",
            dietary: dietary || "Non",
        };

        // 1. Send Admin Notification (Always)
        const adminEmail = new brevo.SendSmtpEmail();
        adminEmail.sender = {
            email: process.env.BREVO_SENDER_EMAIL || "",
            name: process.env.BREVO_SENDER_NAME || "Mariage Basile & Zineb",
        };
        adminEmail.to = [
            {
                email: process.env.BREVO_RECIPIENT_EMAIL || "",
            },
        ];
        adminEmail.templateId = 1; // Admin notification template ID
        adminEmail.params = emailParams;

        await apiInstance.sendTransacEmail(adminEmail);

        // 2. Send Guest Confirmation (Only if email provided)
        if (email && email.trim() !== "") {
            const guestEmail = new brevo.SendSmtpEmail();
            guestEmail.sender = {
                email: process.env.BREVO_SENDER_EMAIL || "",
                name: process.env.BREVO_SENDER_NAME || "Mariage Basile & Zineb",
            };
            guestEmail.to = [{ email: email }];
            guestEmail.templateId = 2;
            guestEmail.params = emailParams;

            await apiInstance.sendTransacEmail(guestEmail);
        }

        return NextResponse.json(
            { success: true, message: "RSVP submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending RSVP email:", error);
        return NextResponse.json(
            { error: "Failed to send RSVP" },
            { status: 500 }
        );
    }
}
