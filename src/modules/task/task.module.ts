import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { TaskRepository } from "./infrastructure/repositories/task.repositoy";
import { TaskController } from "./presentation/task.controller";
import { CreateTaskUseCase } from "./application/use-cases/create-task.use-case";
import { getTasksUseCase } from "./application/use-cases/get-tasks.use-case";

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        TaskRepository,
        CreateTaskUseCase,
        getTasksUseCase
    ],
    exports: [
        TaskRepository,
        CreateTaskUseCase,
        getTasksUseCase
    ],
    controllers: [
        TaskController,
    ]
})
export class TaskMoule { }