import { User } from "@/domain/models"

export interface LoadUserByEmail {
    load: (email: string) => Promise<LoadUserByEmail.Result>
}

export namespace LoadUserByEmail {
    export type Result = User | false
}