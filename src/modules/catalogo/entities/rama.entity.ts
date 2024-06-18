import { Teacher } from 'src/modules/teachers/entities/teachers.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('rama', { schema: 'public' })
export class Rama {
    @PrimaryGeneratedColumn('increment')
    id_rama: number;

    @Column('varchar', {
        name: 'nombre_rama',
        nullable: false
    })
    nombre_rama: string;
    @OneToMany(() => Teacher, (teacher) => teacher.rama)
    docentes: Teacher[];
}