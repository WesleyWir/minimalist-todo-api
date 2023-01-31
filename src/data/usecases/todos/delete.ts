

import { DeleteTodoRepository, LoadTodoByIdRepository } from '@/data/protocols'
import { Todo } from '@/domain/models'
import { DeleteTodo } from '@/domain/usecases'
import { unauthorized } from '@/presentation/contracts'

export class DeleteTodoUseCase implements DeleteTodo {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly loadTodoByIdRepository: LoadTodoByIdRepository
    ) { }

    async delete(id: number, userId: number): Promise<Todo> {
        const todo = await this.loadTodoByIdRepository.loadById(id)
        if (todo.list.project.userId != userId) {
            throw unauthorized()
        }
        return this.deleteTodoRepository.deleteById(id)
    }
}