import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./schedule.entity";
import { Student } from "src/modules/student/entities/student.entity";

@Entity('registro_alumnos_horario', { schema: 'public' })
export class AlumnoHorario {

    @PrimaryColumn('varchar')
    id_registro_alumnos_horarios: string;

    @ManyToOne(() => Student, (student) => student.alumnoHorario)
    @JoinColumn({
        name: 'id_alumno',
    })
    students: Student;

    @ManyToOne(() => Schedule, (schedule) => schedule.alumnoHorario)
    @JoinColumn({
        name: 'id_horario',
    })
    horarios: Schedule;
}
