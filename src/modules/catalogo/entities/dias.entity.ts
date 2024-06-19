import { Schedule } from 'src/modules/schedule/entities/schedule.entity';
import { Student } from 'src/modules/student/entities/student.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('dias', { schema: 'public' })
export class Dias {
    @PrimaryGeneratedColumn('increment')
    id_dia: number;

    @Column('varchar', {
        name: 'nombre_dia',
        nullable: false
    })
    nombre_dia: string;
    
    @OneToMany(() => Schedule, (schedule) => schedule.dias)
    schedules: Schedule[];
}