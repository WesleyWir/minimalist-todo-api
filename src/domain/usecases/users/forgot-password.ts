import { User } from "@/domain/models"

export interface ForgotPassword {
    send: (user: User) => Promise<ForgotPassword.Result>
}

export namespace ForgotPassword {
    export type Result = void
}