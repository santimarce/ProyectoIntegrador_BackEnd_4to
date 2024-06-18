import { TipoAula } from "src/modules/catalogo/entities/tipoaula.entity";
import { Schedule } from "src/modules/schedule/entities/schedule.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity('curso', { schema: 'public' })
export class Course {
    @PrimaryColumn('varchar')
    id_curso: string;

    @Column('varchar', {
        name: 'nombre_curso',
        nullable: false,
    })
    nombre_curso: string;

    @Column('integer', {
        name: 'capacidad_curso',
        nullable: false,
    })
    capacidad_curso: number;

    @ManyToOne(() => TipoAula, (tipoaula) => tipoaula.courses)
    @JoinColumn({
        name: 'id_tipoaula',
    })
    tipoaula: TipoAula;

    @OneToMany(() => Schedule, (schedule) => schedule.course)
    schedules: Schedule[];
}
