import { Student } from 'src/modules/student/entities/student.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('paralelo', { schema: 'public' })
export class Paralelo {
    @PrimaryGeneratedColumn('increment')
    id_paralelo: number;

    @Column('varchar', {
        name: 'nombre_paralelo',
        nullable: false
    })
    nombre_paralelo: string;
    @OneToMany(() => Student, (student) => student.paralelo)
    students: Student[];
}