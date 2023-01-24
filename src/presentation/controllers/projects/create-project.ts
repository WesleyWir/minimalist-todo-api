import { CreateProject } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { CreateProjectRequest } from '@/presentation/requests'

export class CreateProjectController implements Controller {
  constructor (private readonly createProject: CreateProject) {}

  async handle (request: CreateProjectRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.createProject.create(request.auth_user_id, request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}