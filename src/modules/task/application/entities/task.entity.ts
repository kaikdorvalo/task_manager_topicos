import { UserEntity } from "src/modules/user/application/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    completed: boolean

    @ManyToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity

    @Column({ default: new Date() })
    createdAt: Date
}