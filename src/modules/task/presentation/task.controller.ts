import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { CreateTaskUseCase } from "../application/use-cases/create-task.use-case";
import { createTaskDTO } from "../infrastructure/dtos/create-task.dto";
import { Response, response } from "express";
import { getTasksUseCase } from "../application/use-cases/get-tasks.use-case";
import { DeleteTaskUseCase } from "../application/use-cases/delete-task.use-case";
import { UpdateTaskUseCase } from "../application/use-cases/update-task.use-case";

@Controller('/task')
export class TaskController {
    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getTasksUseCase: getTasksUseCase,
        private readonly deleteTaskUseCase: DeleteTaskUseCase,
        private readonly updateTaskUseCase: UpdateTaskUseCase,
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

    @Delete(':id')
    async DeleteTaskUseCase(@Param('id') id: string, @Res() response: Response) {
        const result = await this.deleteTaskUseCase.execute(id)
        return response.status(result.status).send(result.data)
    }

    @Put()
    async updateTask(@Body() dto: any, @Res() response: Response) {
        console.log(dto)
        const result = await this.updateTaskUseCase.execute(dto)
        return response.status(result.status).send(result.data)
    }
}