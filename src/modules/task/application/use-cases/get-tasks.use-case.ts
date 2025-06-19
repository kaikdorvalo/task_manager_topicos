import { UserEntity } from "src/modules/user/application/entities/user.entity";
import { TaskRepository } from "../../infrastructure/repositories/task.repositoy";
import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";

@Injectable()
export class getTasksUseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(user: UserEntity) {
        console.log(user)
        const result = await this.taskRepository.find({})
        return new ResponseObject(HttpStatus.OK, { data: result })
    }
}