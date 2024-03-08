import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { MailService } from 'src/common/mail/mail.service';
import { MailFactory } from 'src/common/mail/mail.factory';
import { MailType } from 'src/common/mail/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    if (user) {
      const onboardingMail = MailFactory.createMail(MailType.Onboarding, user);
      this.mailService.send(onboardingMail);
    }
    return user;
  }
}
