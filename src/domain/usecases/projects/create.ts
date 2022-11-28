import { Project } from '@/domain/models'

export interface CreateProject {
  create: (userId: number, data: CreateProject.Params) => Promise<CreateProject.Result>
}

export namespace CreateProject {
  export type Params = Project
  export type Result = Project
}