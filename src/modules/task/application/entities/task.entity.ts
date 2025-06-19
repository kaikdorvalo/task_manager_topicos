import { UserEntity } from "src/modules/user/application/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    completed: boolean

    @ManyToOne(() => UserEntity, userEntity => userEntity.task)
    user: UserEntity

    @Column({ default: new Date() })
    createdAt: Date
}