import { CreateTodoRepository } from '@/data/protocols'
import { CreateTodo } from '@/domain/usecases'

export class CreateTodoUseCase implements CreateTodo {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository
    ) { }

    async create(data: CreateTodoRepository.Params): Promise<CreateTodoRepository.Result> {
        return this.createTodoRepository.create(data)
    }
}