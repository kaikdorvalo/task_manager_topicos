import { HttpStatus, Injectable } from "@nestjs/common";
import { TaskRepository } from "../../infrastructure/repositories/task.repositoy";
import { createTaskDTO } from "../../infrastructure/dtos/create-task.dto";
import { UserEntity } from "src/modules/user/application/entities/user.entity";
import { ResponseObject } from "src/shared/presentation/response/response-object";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(dto: createTaskDTO, user: UserEntity) {
        const task = this.taskRepository.create(dto)
        task.user = user

        const newTask = await this.taskRepository.save(task)

        return new ResponseObject(HttpStatus.CREATED, { message: "Tarefa criada com sucesso" })
    }
}