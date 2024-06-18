import { MallaAsignatura } from 'src/modules/mallacurricular/entities/mallaasignaturas.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';
import { AsignaturaDocente } from 'src/modules/teachers/entities/asignaturadocentes.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';

@Entity('asignatura', { schema: 'public' })
export class Asignatura {
    @PrimaryGeneratedColumn('increment')
    id_asignatura: number;

    @Column('varchar', {
        name: 'nombre_asignatura',
        nullable: false
    })
    nombre_asignatura: string;

    @ManyToMany(() => AsignaturaDocente, (asignaturaDocente) => asignaturaDocente.asignaturas)
    asignaturasDocente: AsignaturaDocente[];

    @ManyToMany(() => MallaAsignatura, (mallaAsignaturas) => mallaAsignaturas.asignaturas)
    mallaAsignaturas: MallaAsignatura[];

    @OneToMany(() => Schedule, (schedule) => schedule.asignatura)
    schedules: Schedule[];
}