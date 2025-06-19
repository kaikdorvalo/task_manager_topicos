import { HttpStatus, Injectable } from "@nestjs/common";
import { TaskRepository } from "../../infrastructure/repositories/task.repositoy";
import { ResponseObject } from "src/shared/presentation/response/response-object";

@Injectable()
export class DeleteTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(id: string) {
        const result = await this.taskRepository.delete(id)
        console.log(result)
        return new ResponseObject(HttpStatus.NO_CONTENT, { message: 'Deleted' })
    }
}