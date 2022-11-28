import { Project } from '@/domain/models'

export interface DeleteProject {
  delete: (id: number, userId: number) => Promise<DeleteProject.Result>
}

export namespace DeleteProject {
  export type Result = Project
}