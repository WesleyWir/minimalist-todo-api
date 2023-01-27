import { Project } from '@/domain/models'

export interface LoadProjectsByUser {
  loadProjectsByUser: (userId: number) => Promise<LoadProjectsByUser.Result>
}

export namespace LoadProjectsByUser {
  export type Result = Project[]
}