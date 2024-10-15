import Email from "../models/Email.js";
import { MY_EMAIL, MY_EMAIL_PASWORD } from "../../../config.js";
import { nodemailer } from "nodemailer";
import { validationResult } from "express-validator";

export const controller = {};

controller.sendAndSaveEmail = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MY_EMAIL, // 'my-email@gmail.com',
            pass: MY_EMAIL_PASWORD // 'my-email-password'
        }
    });

    let mailOptions = {
        from: email,
        to: MY_EMAIL, // 'my-email@gmail.com', // My email where I receive contact form info
        subject: `Contact form submission from ${name}`,
        text: `You received a message from:
        Name: ${name}
        Email: ${email}
        Message: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        const newEmail = new Email({
            name,
            email,
            message
        });
        await newEmail.save();
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' });
    }
};