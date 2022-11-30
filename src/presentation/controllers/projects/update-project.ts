import { UpdateProject } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { UpdateProjectRequest } from '@/presentation/requests'

export class UpdateProjectController implements Controller {
  constructor (private readonly updateProject: UpdateProject) {}

  async handle (request: UpdateProjectRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.updateProject.update(parseInt(request.id), request)
      return created(data)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}