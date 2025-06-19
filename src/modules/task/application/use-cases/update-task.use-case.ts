import { HttpStatus, Injectable } from "@nestjs/common";
import { TaskRepository } from "../../infrastructure/repositories/task.repositoy";
import { ResponseObject } from "src/shared/presentation/response/response-object";

@Injectable()
export class UpdateTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(dto: any) {
        const find = await this.taskRepository.findById(dto.id)
        if (find) {
            find.name = dto.name
            find.completed = dto.completed

            console.log(find)
            const result = await this.taskRepository.save(find)
            return new ResponseObject(HttpStatus.OK, { data: result })
        }

        return new ResponseObject(HttpStatus.BAD_REQUEST)
    }
}