const resend = new Resend(process.env.RESEND_API_KEY);

const { name, company, email, phone, message, attachments } = req.body;

if (!email || !name) {
    return res.status(400).json({ error: 'Name and Email are required' });
}

try {
    const data = await resend.emails.send({
        from: 'Naptech Website <onboarding@resend.dev>', // Update this once domain is verified
        to: ['naptechprecision@gmail.com'],
        subject: `New Quote Request from ${name}`,
        html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0f172a;">New Quote Request</h2>
                    <p style="color: #64748b;">You have received a new inquiry from the website contact form.</p>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #334155;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Company:</strong> ${company || 'N/A'}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                        
                        <h3 style="color: #334155; margin-top: 20px;">Project Requirements</h3>
                        <p style="white-space: pre-wrap;">${message || 'No details provided.'}</p>

                        ${attachments && attachments.length > 0 ? `
                        <h3 style="color: #334155; margin-top: 20px;">Attachments</h3>
                        <p><strong>${attachments.length} file(s) attached</strong></p>
                        ` : ''}
                    </div>

                    <p style="font-size: 12px; color: #94a3b8; text-align: center;">
                        Sent from Naptech Precision Engineering Website
                    </p>
                </div>
            `,
        attachments: attachments || []
    });

    if (data.error) {
        console.error('Resend Error:', data.error);
        return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully', id: data.data?.id });
} catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Failed to send email: ' + error.message });
}
}
