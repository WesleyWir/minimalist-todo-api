import { LoadProjectsByUserIdRepository } from '@/data/protocols'
import { LoadProjectsByUser } from '@/domain/usecases'

export class LoadProjectsByUserUseCase implements LoadProjectsByUser {
    constructor(
        private readonly loadProjectsByUserIdRepository: LoadProjectsByUserIdRepository
    ) { }

    async loadProjectsByUser(userId: number): Promise<LoadProjectsByUser.Result> {
        const projects = await this.loadProjectsByUserIdRepository.loadProjectsByUserId(userId)
        return projects;
    }
}