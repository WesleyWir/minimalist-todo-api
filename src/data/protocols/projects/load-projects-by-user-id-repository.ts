import { Project } from "@/domain/models"

export interface LoadProjectsByUserIdRepository {
    loadProjectsByUserId: (userId: number) => Promise<LoadProjectsByUserIdRepository.Result>
}

export namespace LoadProjectsByUserIdRepository {
    export type Result = Project[]
}