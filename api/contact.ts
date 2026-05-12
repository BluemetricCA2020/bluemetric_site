/// <reference types="node" />
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let body: { firstName: string; lastName: string; email: string; phone: string; subject: string; message: string }
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const { firstName, lastName, email, phone, subject, message } = body

  if (!firstName || !lastName || !email) {
    return new Response('Missing required fields', { status: 400 })
  }

  const subjectLine = subject
    ? `Contact form: ${subject} — ${firstName} ${lastName}`
    : `Contact form — ${firstName} ${lastName}`

  const html = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
    ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
  `

  const { error } = await resend.emails.send({
    from: 'Bluemetric Website <noreply@bluemetric.nl>',
    to: 'info@bluemetric.nl',
    replyTo: email,
    subject: subjectLine,
    html,
  })

  if (error) {
    console.error('Resend error', { error })
    return new Response('Failed to send email', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}

export const config = {
  runtime: 'edge',
}
