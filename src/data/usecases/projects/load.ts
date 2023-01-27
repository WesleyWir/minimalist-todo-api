import { LoadProjectByIdRepository } from '@/data/protocols'
import { LoadProject } from '@/domain/usecases'
import { unauthorized } from '@/presentation/contracts';

export class LoadProjectUseCase implements LoadProject {
    constructor(
        private readonly loadProjectByIdRepository: LoadProjectByIdRepository
    ) { }

    async load(id: number, userId: number): Promise<LoadProject.Result> {
        const project = await this.loadProjectByIdRepository.loadById(id)
        if(project.userId != userId) {
            throw unauthorized()
        }
        return project;
    }
}