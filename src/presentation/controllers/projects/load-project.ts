import { LoadProject } from '@/domain/usecases'
import { Controller, HttpResponse, ok } from '@/presentation/contracts'

export class LoadProjectController implements Controller {
  constructor (private readonly loadProject: LoadProject) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.loadProject.load(parseInt(request.id), request.auth_user_id)
      return ok(data)
    } catch (error) {
      return error
    }
  }
}