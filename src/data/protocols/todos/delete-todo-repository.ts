import { Todo } from "@/domain/models";

export interface DeleteTodoRepository {
    deleteById: (id: number) => Promise<Todo>
}