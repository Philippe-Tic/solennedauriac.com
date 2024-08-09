import { NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request: Request) {
  const formData = await request.formData();
  const content = formData.get('content')
  const name = formData.get('name')
  const company = formData.get('company')
  const email = formData.get('email') as string
  const phone = formData.get('phone')

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL,
      subject: `Nouveau mail de ${name} ${email}`,
      text: `${content}
${company ? `Entreprise: ${ company }` : ""}
${phone ? `Téléphone: ${ phone }` : ""}`
    };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
  });

  try {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        throw new Error(error);
      }
    });

    return NextResponse.json({ message: "Success: email was sent" })

  } catch (error) {
    throw new Error();
  }
  }
