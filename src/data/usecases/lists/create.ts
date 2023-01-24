import { CreateListRepository } from '@/data/protocols'
import { CreateList } from '@/domain/usecases'

export class CreateListUseCase implements CreateList {
    constructor(
        private readonly createListRepository: CreateListRepository
    ) { }

    async create(data: CreateListRepository.Params): Promise<CreateListRepository.Result> {
        return this.createListRepository.create(data)
    }
}