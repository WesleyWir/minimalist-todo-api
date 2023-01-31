import { UpdateTodoRepository } from '@/data/protocols'
import { UpdateTodo } from '@/domain/usecases'

export class UpdateTodoUseCase implements UpdateTodo {
    constructor(
        private readonly createTodoRepository: UpdateTodoRepository
    ) { }

    async update(id: number, data: UpdateTodoRepository.Params): Promise<UpdateTodoRepository.Result> {
        return this.createTodoRepository.update(id, data)
    }
}