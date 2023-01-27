import { LoadProjectsByUser } from '@/domain/usecases'
import { LoadProjectsByUserUseCase } from '@/data/usecases'
import { ProjectsRepository } from '@/infra/database/prisma/repositories'

export const makeLoadProjectsByUserUseCase = (): LoadProjectsByUser => {
  const projectsRepository = new ProjectsRepository()
  return new LoadProjectsByUserUseCase(projectsRepository)
}