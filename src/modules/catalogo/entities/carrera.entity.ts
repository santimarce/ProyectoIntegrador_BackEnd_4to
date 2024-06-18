import { Mallacurricular } from 'src/modules/mallacurricular/entities/mallacurricular.entity';
import { Student } from 'src/modules/student/entities/student.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity('carrera', { schema: 'public' })
export class Carrera extends Catalogo {
    @PrimaryGeneratedColumn('increment')
    id_carrera: number;

    @Column('varchar', {
        name: 'nombre_carrera',
        nullable: false
    })
    nombre_carrera: string;

    @OneToMany(() => Student, (student) => student.carrera)
    students: Student[];

    @OneToMany(() => Mallacurricular, (malla) => malla.id_mallacurricular)
    malla: Mallacurricular[];
}