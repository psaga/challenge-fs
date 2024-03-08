import { User } from 'src/user/user.entity';
import { Mail } from '../../mail';
import { MailType } from '../../types';
import { loadTemplate } from '../utils';

export class OnboardingMail extends Mail {
  constructor(user: User) {
    const html = loadTemplate(MailType.Onboarding, {
      username: user.username,
    });
    super(user.email, 'Welcome to Deli Sandbox', html);
  }
}
