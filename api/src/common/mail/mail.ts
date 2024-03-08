import { IMail } from './types';

export class Mail implements IMail {
  from: string =
    'Mailgun Sandbox <postmaster@sandboxdf6bd9b39271484880a2ba873a1c486c.mailgun.org>';
  to: string;
  subject: string;
  text?: string;
  html?: string;

  constructor(to: string, subject: string, html?: string, text?: string) {
    this.to = to;
    this.subject = subject;
    this.html = html;
    this.text = text;
  }
}
