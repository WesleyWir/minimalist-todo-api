import { LoadUserByToken } from '@/domain/usecases'
import { Decrypter, LoadUserByTokenRepository } from '@/data/protocols'

export class LoadUserByTokenUseCase implements LoadUserByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadUserByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<LoadUserByTokenRepository.Result> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}