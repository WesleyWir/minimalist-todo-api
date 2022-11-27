

import { CreateUserRepository } from '@/data/protocols/user/create-user-repository'
import { CreateUser } from '@/domain/usecases'
import * as bcrypt from 'bcrypt';

export class CreateUserUseCase implements CreateUser {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
    ) { }

    async create(data: CreateUserRepository.Params): Promise<CreateUserRepository.Result> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data = {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            profile: data.profile
        }
        return this.createUserRepository.create(data)
    }
}