import { LoadListByIdRepository } from '@/data/protocols'
import { LoadList } from '@/domain/usecases'
import { unauthorized } from '@/presentation/contracts';

export class LoadListUseCase implements LoadList {
    constructor(
        private readonly loadListByIdRepository: LoadListByIdRepository
    ) { }

    async load(id: number, userId: number): Promise<LoadList.Result> {
        const list = await this.loadListByIdRepository.loadById(id)
        if(list.project.userId != userId) {
            throw unauthorized()
        }
        return list;
    }
}