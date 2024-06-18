import { Student } from 'src/modules/student/entities/student.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('jornada', { schema: 'public' })
export class Jornada {
    @PrimaryGeneratedColumn('increment')
    id_jornada: number;

    @Column('varchar', {
        name: 'nombre_jornada',
        nullable: false
    })
    nombre_jornada: string;
    @OneToMany(() => Student, (student) => student.jornada)
    students: Student[];
}