import { List } from "@/domain/models"

export interface LoadListByIdRepository {
    loadById: (id: number) => Promise<LoadListByIdRepository.Result>
}

export namespace LoadListByIdRepository {
    export type Result = List
}