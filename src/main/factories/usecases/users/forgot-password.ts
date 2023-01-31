import env from '@/main/config/env'
import { ForgotPassword } from '@/domain/usecases'
import { ForgotPasswordUseCase } from '@/data/usecases'
import { NodeMailerAdapter } from '@/infra'

export const makeForgotPasswordUseCase = (): ForgotPassword => {
    const config = {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD
    }
    const nodeMailerAdapter = new NodeMailerAdapter(config)
    return new ForgotPasswordUseCase(nodeMailerAdapter)
}