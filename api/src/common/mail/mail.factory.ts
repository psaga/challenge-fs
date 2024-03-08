import { User } from 'src/user/user.entity';
import { OnboardingMail } from './templates/onboarding/onboarding';
import { MailType } from './types';

export class MailFactory {
  static createMail(type: MailType, user: User) {
    switch (type) {
      case MailType.Onboarding:
        return new OnboardingMail(user);
      default:
        throw new Error('Invalid mail type');
    }
  }
}
