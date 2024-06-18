import { Carrera } from "src/modules/catalogo/entities/carrera.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MallaAsignatura } from "./mallaasignaturas.entity";

@Entity('mallacurricular', { schema: 'public' })
export class Mallacurricular {
    @PrimaryColumn()
    id_mallacurricular: string;

    @Column('varchar', {
        name: 'nombre_mallacurricular',
        nullable: false,
    })
    nombre_mallacurricular: string;

    @Column('date', {
        name: 'fechacreacion_mallacurricular',
        nullable: false,
    })
    fechacreacion_mallacurricular: Date;

    @Column('date', {
        name: 'fechavigencia_mallacurricular',
        nullable: false,
    })
    fechavigencia_mallacurricular: Date;

    @ManyToOne(() => Carrera, (carrera) => carrera.malla)
    @JoinColumn({ name: 'id_carrera' })
    carrera: Carrera;

    @OneToMany(() => MallaAsignatura, (mallaAsignaturas) => mallaAsignaturas.mallas)
    mallaAsignaturas: MallaAsignatura[];

}