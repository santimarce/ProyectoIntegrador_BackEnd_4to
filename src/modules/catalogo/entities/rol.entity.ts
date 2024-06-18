import { Teacher } from 'src/modules/teachers/entities/teachers.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('rol', { schema: 'public' })
export class Rol {
    @PrimaryGeneratedColumn('increment')
    id_rol: number;

    @Column('varchar', {
        name: 'nombre_rol',
        nullable: false
    })
    nombre_rol: string;
    @OneToMany(() => Teacher, (teacher) => teacher.rol)
    docentes: Teacher[];
}