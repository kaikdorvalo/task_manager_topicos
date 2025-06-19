import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { TaskRepository } from "./infrastructure/repositories/task.repositoy";
import { TaskController } from "./presentation/task.controller";
import { CreateTaskUseCase } from "./application/use-cases/create-task.use-case";
import { getTasksUseCase } from "./application/use-cases/get-tasks.use-case";
import { DeleteTaskUseCase } from "./application/use-cases/delete-task.use-case";
import { UpdateTaskUseCase } from "./application/use-cases/update-task.use-case";

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        TaskRepository,
        CreateTaskUseCase,
        getTasksUseCase,
        DeleteTaskUseCase,
        UpdateTaskUseCase,
    ],
    exports: [
        TaskRepository,
        CreateTaskUseCase,
        getTasksUseCase,
        DeleteTaskUseCase,
        UpdateTaskUseCase,
    ],
    controllers: [
        TaskController,
    ]
})
export class TaskMoule { }