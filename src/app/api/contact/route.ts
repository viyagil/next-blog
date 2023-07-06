import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function POST(request: Request) {
  const { email, title, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'viyagil@gmail.com',
      pass: 'lthgllvilnxdkjfu',
    },
  })
  try {
    await transporter.sendMail({
      from: email,
      to: 'viyagil@gmail.com',
      subject: title,
      text: message,
    })

    alert('메일이 전송되었습니다.')
  } catch (err) {
    console.log(err)
  }

  return NextResponse.json({ email, title, message })
}
