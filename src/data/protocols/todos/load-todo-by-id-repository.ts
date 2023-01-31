import { Todo } from "@/domain/models";

export interface LoadTodoByIdRepository {
    loadById: (id: number) => Promise<LoadTodoByIdRepository.Result>
}

export namespace LoadTodoByIdRepository {
    export type Result = Todo
}