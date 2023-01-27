import { LoadUserByEmail } from '@/domain/usecases'
import { Decrypter, LoadUserByEmailRepository } from '@/data/protocols'

export class LoadUserByEmailUseCase implements LoadUserByEmail {
  constructor(
    private readonly loadAccountByEmailRepository: LoadUserByEmailRepository
  ) { }

  async load(email: string): Promise<LoadUserByEmail.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(email)
    if (account) {
      return account;
    }

    return false;
  }
}