import { DeleteProject } from '@/domain/usecases'
import { DeleteProjectUseCase } from '@/data/usecases'
import { ProjectsRepository } from '@/infra/database/prisma/repositories'

export const makeDeleteProjectUseCase = (): DeleteProject => {
  const projectsRepository = new ProjectsRepository()
  return new DeleteProjectUseCase(projectsRepository, projectsRepository)
}