import { Module, Provider } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';
import * as mailgun from 'mailgun-js';

const MailgunProvider: Provider = {
  provide: 'MAILGUN',
  useFactory: (config: ConfigService) =>
    mailgun({
      apiKey: config.get('MAILGUN_API_KEY'),
      domain: config.get('MAILGUN_API_DOMAIN'),
    }),
  inject: [ConfigService],
};

@Module({
  providers: [MailgunProvider, MailService],
  exports: [MailService],
})
export class MailModule {}
