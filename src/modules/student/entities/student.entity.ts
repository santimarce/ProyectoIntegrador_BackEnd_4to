import { Carrera } from "src/modules/catalogo/entities/carrera.entity";
import { Jornada } from "src/modules/catalogo/entities/jornada.entity";
import { Nivel } from "src/modules/catalogo/entities/nivel.entity";
import { Paralelo } from "src/modules/catalogo/entities/paralelo.entity";
import { AlumnoHorario } from "src/modules/schedule/entities/alumnohorarios.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('alumno', { schema: 'public' })
export class Student {
    @PrimaryColumn()
    id_alumno: string;

    @Column('varchar', {
        name: 'nombres_alumno',
        nullable: false
    })
    nombres_alumno: string;
    @Column('varchar', {
        name: 'apellidos_alumno',
        nullable: false
    })
    apellidos_alumno: string;
    @Column('date', {
        name: 'fechanacimiento_alumno',
        nullable: false
    })
    fechanacimiento_alumno: Date | null;
    @Column('varchar', {
        name: 'contacto_alumno',
        nullable: false
    })
    contacto_alumno: string;
    @Column('varchar', {
        name: 'direccion_alumno',
        nullable: false
    })
    direccion_alumno: string;
    @Column('varchar', {
        name: 'email_alumno',
        nullable: false
    })
    email_alumno: string;

    @Column('varchar', {
        name: 'cotrasenia_alumno',
        nullable: false
    })
    contrasenia_alumno: string;

    @ManyToOne(() => Jornada, (jornada) => jornada.students)
    @JoinColumn({ name: 'id_jornada' })
    jornada: Jornada;

    @ManyToOne(() => Nivel, (nivel) => nivel.students)
    @JoinColumn({ name: 'id_nivel' })
    nivel: Nivel;

    @ManyToOne(() => Paralelo, (paralelo) => paralelo.students)
    @JoinColumn({ name: 'id_paralelo' })
    paralelo: Paralelo;

    @ManyToOne(() => Carrera, (carrera) => carrera.students)
    @JoinColumn({ name: 'id_carrera' })
    carrera: Carrera;

    @ManyToMany(() => AlumnoHorario, (alumnoHorario) => alumnoHorario.students)
    alumnoHorario: AlumnoHorario[];
}