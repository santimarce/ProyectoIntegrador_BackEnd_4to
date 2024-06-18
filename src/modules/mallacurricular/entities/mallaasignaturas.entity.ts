import { Asignatura } from 'src/modules/asignaturas/entities/asignatura.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Mallacurricular } from './mallacurricular.entity';
import { Type } from 'class-transformer';

@Entity('malla_asignaturas', { schema: 'public' })
export class MallaAsignatura {

    @PrimaryGeneratedColumn('increment')
    id_malla_asignaturas: number;

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.mallaAsignaturas)
    @JoinColumn({
        name: 'id_asignatura',
    })
    asignaturas: Asignatura;

    @ManyToOne(() => Mallacurricular, (malla) => malla.mallaAsignaturas)
    @JoinColumn({
        name: 'id_mallacurricular',
    })
    mallas: Mallacurricular;
}
