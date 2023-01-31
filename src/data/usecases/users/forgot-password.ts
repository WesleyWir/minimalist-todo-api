import { ForgotPassword } from '@/domain/usecases'
import { User } from '@/domain/models';
import { Send } from '@/data/protocols';

export class ForgotPasswordUseCase implements ForgotPassword {
  constructor(
    private readonly sendEmailService: Send
  ) { }

  async send(account: User): Promise<ForgotPassword.Result> {
    const sendData = {
      from: 'minimalisttodo@no-reply.com',
      to: account.email,
      subject: 'Reset Password',
      html: '<h1>lol</h1>'
    }
    return this.sendEmailService.send(sendData);
  }
}