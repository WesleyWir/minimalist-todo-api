import { ForgotPassword, LoadUserByEmail } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created, badRequest, ok } from '@/presentation/contracts'
import { ForgotPasswordRequest } from '@/presentation/requests'

export class ForgotPasswordController implements Controller {
    constructor(private readonly loadUserByEmail: LoadUserByEmail, private readonly forgotPassword: ForgotPassword) { }

    async handle(request: ForgotPasswordRequest): Promise<HttpResponse<[]>> {
        try {
            const email = request.email;
            let user = await this.loadUserByEmail.load(email);
            
            if(user){
                await this.forgotPassword.send(user);
            }

            return ok(`If user exist. Email was sended to ${email}`)

        } catch (error) {
            return serverError(error)
        }
    }
}