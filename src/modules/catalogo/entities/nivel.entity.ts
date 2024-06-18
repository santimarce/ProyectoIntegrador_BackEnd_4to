import { Student } from 'src/modules/student/entities/student.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('nivel', { schema: 'public' })
export class Nivel {
    @PrimaryGeneratedColumn('increment')
    id_nivel: number;

    @Column('varchar', {
        name: 'nombre_nivel',
        nullable: false
    })
    nombre_nivel: string;
    @OneToMany(() => Student, (student) => student.nivel)
    students: Student[];
}