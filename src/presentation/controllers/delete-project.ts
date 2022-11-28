import { DeleteProject } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'

export class DeleteProjectController implements Controller {
  constructor (private readonly deleteProject: DeleteProject) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.deleteProject.delete(parseInt(request.id), request.userId)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}