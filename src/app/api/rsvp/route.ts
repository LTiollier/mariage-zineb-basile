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
        const { attendance, name, phone, hasChildren, childrenCount, dietary } = body;

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

        // Prepare email parameters
        const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.sender = {
            email: process.env.BREVO_SENDER_EMAIL || "",
            name: process.env.BREVO_SENDER_NAME || "Mariage Zineb & Basile",
        };
        sendSmtpEmail.to = [
            {
                email: process.env.BREVO_RECIPIENT_EMAIL || "",
            },
        ];
        sendSmtpEmail.templateId = 1; // Brevo template ID
        sendSmtpEmail.params = {
            name,
            phone,
            attendance,
            hasChildren: hasChildren || "non",
            childrenCount: childrenCount || "0",
            dietary: dietary || "Non",
        };

        // Send email
        await apiInstance.sendTransacEmail(sendSmtpEmail);

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
