import { Course } from 'src/modules/course/entities/course.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('tipoaula', { schema: 'public' })
export class TipoAula {
    @PrimaryGeneratedColumn('increment')
    id_tipoaula: number;

    @Column('varchar', {
        name: 'nombre_tipoaula',
        nullable: false
    })
    nombre_tipoaula: string;
    @OneToMany(() => Course, (course) => course.tipoaula)
    courses: Course[];
}