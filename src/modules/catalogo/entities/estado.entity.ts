import { Teacher } from 'src/modules/teachers/entities/teachers.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('estado', { schema: 'public' })
export class Estado {
    @PrimaryGeneratedColumn('increment')
    id_estado: number;

    @Column('varchar', {
        name: 'nombre_estado',
        nullable: false
    })
    nombre_estado: string;
    
    @OneToMany(() => Teacher, (teacher) => teacher.estado)
    docentes: Teacher[];
}