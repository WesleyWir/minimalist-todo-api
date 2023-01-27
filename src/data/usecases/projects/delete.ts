

import { DeleteProjectRepository, LoadProjectByIdRepository } from '@/data/protocols'
import { Project } from '@/domain/models'
import { DeleteProject } from '@/domain/usecases'
import { unauthorized } from '@/presentation/contracts'

export class DeleteProjectUseCase implements DeleteProject {
    constructor(
        private readonly deleteProjectRepository: DeleteProjectRepository,
        private readonly loadProjectByIdRepository: LoadProjectByIdRepository
    ) { }

    async delete(id: number, userId: number): Promise<Project> {
        const project = await this.loadProjectByIdRepository.loadById(id)
        if(project.userId != userId) {
            throw unauthorized()
        }
        return this.deleteProjectRepository.deleteById(id)
    }
}