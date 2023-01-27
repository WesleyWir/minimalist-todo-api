

import { DeleteListRepository, LoadListByIdRepository } from '@/data/protocols'
import { List } from '@/domain/models'
import { DeleteList } from '@/domain/usecases'
import { UnauthorizedError } from '@/presentation/errors'

export class DeleteListUseCase implements DeleteList {
    constructor(
        private readonly deleteListRepository: DeleteListRepository,
        private readonly loadListByIdRepository: LoadListByIdRepository
    ) { }

    async delete(id: number, userId: number): Promise<List> {
        const list = await this.loadListByIdRepository.loadById(id)
        if(list.project.userId != userId) {
            throw new UnauthorizedError()
        }
        return this.deleteListRepository.deleteById(id)
    }
}