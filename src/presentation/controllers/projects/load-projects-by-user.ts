import { LoadProject, LoadProjectsByUser } from '@/domain/usecases'
import { Controller, HttpResponse, ok } from '@/presentation/contracts'

export class LoadProjectsByUserController implements Controller {
  constructor (private readonly loadProject: LoadProjectsByUser) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.loadProject.loadProjectsByUser(request.auth_user_id)
      return ok(data)
    } catch (error) {
      return error
    }
  }
}