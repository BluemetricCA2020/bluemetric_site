/// <reference types="node" />
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ALLOWED_SUBJECTS = new Set(['advisory', 'reporting', 'private', 'general'])
const EMAIL_REGEX = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ')

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let body: Record<string, unknown>
  try {
    const parsed: unknown = await req.json()
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid body')
    body = parsed as Record<string, unknown>
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots don't retry.
  if (str(body.website, 200)) {
    return new Response('OK', { status: 200 })
  }

  const firstName = oneLine(str(body.firstName, 100))
  const lastName = oneLine(str(body.lastName, 100))
  const email = str(body.email, 254)
  const phone = oneLine(str(body.phone, 50))
  const subjectRaw = str(body.subject, 50)
  const subject = ALLOWED_SUBJECTS.has(subjectRaw) ? subjectRaw : ''
  const message = str(body.message, 5000)

  if (!firstName || !lastName || !email) {
    return new Response('Missing required fields', { status: 400 })
  }

  if (!EMAIL_REGEX.test(email)) {
    return new Response('Invalid email', { status: 400 })
  }

  const subjectLine = subject
    ? `Contact Formulier Website: ${subject} - ${firstName} ${lastName}`
    : `Contact Formulier Website - ${firstName} ${lastName}`

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>` : ''}
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
