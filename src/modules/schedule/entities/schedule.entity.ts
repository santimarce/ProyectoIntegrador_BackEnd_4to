import { Asignatura } from "src/modules/asignaturas/entities/asignatura.entity";
import { Dias } from "src/modules/catalogo/entities/dias.entity";
import { Course } from "src/modules/course/entities/course.entity";
import { Teacher } from "src/modules/teachers/entities/teachers.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AlumnoHorario } from "./alumnohorarios.entity";

@Entity('horario', { schema: 'public' })
export class Schedule {
    @PrimaryColumn('varchar')
    id_horario: string;

    @Column('time without time zone', {
        name: 'horainicio_horario',
        nullable: false,
    })
    horainicio_horario: Date;

    @Column('time without time zone', {
        name: 'horafin_horario',
        nullable: false,
    })
    horafin_horario: Date;

    @ManyToOne(() => Teacher, (docente) => docente.schedules)
    @JoinColumn({ name: 'id_docente' })
    docente: Teacher;

    @ManyToOne(() => Course, (course) => course.schedules)
    @JoinColumn({ name: 'id_curso' })
    course: Course;

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.schedules)
    @JoinColumn({ name: 'id_asignatura' })
    asignatura: Asignatura;

    @ManyToOne(() => Dias, (dias) => dias.schedules)
    @JoinColumn({ name: 'id_dia' })
    dias: Dias;

    @OneToMany(() => AlumnoHorario, (alumnoHorario) => alumnoHorario.horarios)
    alumnoHorario: AlumnoHorario[];

}