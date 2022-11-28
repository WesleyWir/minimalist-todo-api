import { CreateProject, CreateUser } from '@/domain/usecases'
import { CreateProjectUseCase } from '@/data/usecases'
import { ProjectsRepository } from '@/infra/database/prisma/repositories'

export const makeCreateProjectUseCase = (): CreateProject => {
  const projectsRepository = new ProjectsRepository()
  return new CreateProjectUseCase(projectsRepository)
}