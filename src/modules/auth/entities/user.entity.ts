import { Rol } from 'src/modules/catalogo/entities/rol.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('usuarios', { schema: 'public' })
export class Usuarios {
    @PrimaryGeneratedColumn('increment')
    id_user: number;

    @Column('varchar', {
        name: 'user_id',
        nullable: false
    })
    user_id: string;

    @Column('varchar', {
        name: 'email',
        nullable: false
    })
    email: string;

    @Column('varchar', {
        name: 'contrasenia',
        nullable: false
    })
    contrasenia: string;

    @Column('boolean', {
        name: 'activo',
        default: true
    })
    activo: boolean;

    @ManyToOne(() => Rol, (rol) => rol.user)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;
}
