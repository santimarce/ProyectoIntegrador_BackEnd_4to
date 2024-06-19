import { Usuarios } from 'src/modules/auth/entities/user.entity';
import { Teacher } from 'src/modules/teachers/entities/teachers.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('rol', { schema: 'public' })
export class Rol {
    @PrimaryGeneratedColumn('increment', { name: 'id_rol' })
    id_rol: number;

    @Column('varchar', {
        name: 'nombre_rol',
        nullable: false
    })
    nombre_rol: string;

    @OneToMany(() => Teacher, (teacher) => teacher.rol)
    docentes: Teacher[];

    @OneToMany(() => Usuarios, (user) => user.rol)
    user: Usuarios[];
}