import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { CreateTaskUseCase } from "../application/use-cases/create-task.use-case";
import { createTaskDTO } from "../infrastructure/dtos/create-task.dto";
import { Response, response } from "express";
import { getTasksUseCase } from "../application/use-cases/get-tasks.use-case";

@Controller('/task')
export class TaskController {
    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getTasksUseCase: getTasksUseCase,
    ) { }

    @Post()
    async createTask(@Body() dto: createTaskDTO, @Req() request, @Res() response: Response) {
        const result = await this.createTaskUseCase.execute(dto, request.user)
        return response.status(result.status).send(result.data)
    }

    @Get()
    async getUserTasks(@Req() request, @Res() response) {
        const result = await this.getTasksUseCase.execute(request.user);
        return response.status(result.status).send(result.data)
    }
}