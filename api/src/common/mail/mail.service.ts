import { Inject, Injectable } from '@nestjs/common';
import { IMail } from './types';
import { Mailgun } from 'mailgun-js';

@Injectable()
export class MailService {
  constructor(@Inject('MAILGUN') private mailProvider: Mailgun) {}

  async send(mail: IMail) {
    this.mailProvider.messages().send(mail, function (error) {
      console.log(error);
    });
  }
}
