import { Teacher } from 'src/modules/teachers/entities/teachers.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('facultad', { schema: 'public' })
export class Facultad {
    @PrimaryGeneratedColumn('increment')
    id_facultad: number;

    @Column('varchar', {
        name: 'nombre_facultad',
        nullable: false
    })
    nombre_facultad: string;
    @OneToMany(() => Teacher, (teacher) => teacher.facultad)
    docentes: Teacher[];
}