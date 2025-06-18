import { BaseRepository } from "src/shared/infrastructure/repository/base-repository.repository";
import { TaskEntity } from "../../application/entities/task.entity";
import { DataSource } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepository extends BaseRepository<TaskEntity> {
    constructor(
        @Inject("DATA_SOURCE")
        private dataSource: DataSource
    ) {
        super(
            dataSource,
            TaskEntity
        )
    }
}