import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Roles } from "../../../../shared/application/enum/roles.enum";
import { TaskEntity } from "src/modules/task/application/entities/task.entity";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false, unique: true })
    email: string

    @Column({ nullable: false })
    password: string

    @OneToMany(() => TaskEntity, (TaskEntity) => TaskEntity.user)
    task: TaskEntity[]

    @Column({ nullable: false, type: "enum", enum: Roles, default: Roles.USER })
    role: Roles

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}