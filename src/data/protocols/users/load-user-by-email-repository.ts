import { User } from "@prisma/client"

export interface LoadUserByEmailRepository {
    loadByEmail: (email: string) => Promise<LoadUserByEmailRepository.Result>
}

export namespace LoadUserByEmailRepository {
    export type Result = User
}