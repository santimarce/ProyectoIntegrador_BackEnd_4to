import { Entity, Column, PrimaryColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { AsignaturaDocente } from './asignaturadocentes.entity';
import { Rol } from 'src/modules/catalogo/entities/rol.entity';
import { Rama } from 'src/modules/catalogo/entities/rama.entity';
import { Estado } from 'src/modules/catalogo/entities/estado.entity';
import { Facultad } from 'src/modules/catalogo/entities/facultad.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';

@Entity('docente', { schema: 'public' })
export class Teacher {

  @PrimaryColumn('varchar')
  id_docente: string;

  @Column('varchar', {
    name: 'nombres_docente',
    nullable: false,
  })
  nombres_docente: string;

  @Column('varchar', {
    name: 'apellidos_docente',
    nullable: false,
  })
  apellidos_docente: string;

  @Column('varchar', {
    name: 'contacto_docente',
    nullable: false,
  })
  contacto_docente: string;

  @Column('varchar', {
    name: 'email_docente',
    nullable: false,
  })
  email_docente: string;

  @Column('varchar', {
    name: 'contrasenia_docente',
    nullable: false,
  })
  contrasenia_docente: string;

  @ManyToOne(() => Rama, (rama) => rama.docentes)
  @JoinColumn({ name: 'id_rama' })
  rama: Rama;

  @ManyToOne(() => Facultad, (facultad) => facultad.docentes)
  @JoinColumn({ name: 'id_facultad' })
  facultad: Facultad;

  @ManyToOne(() => Estado, (estado) => estado.docentes)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @ManyToOne(() => Rol, (rol) => rol.docentes)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @OneToMany(() => AsignaturaDocente, (asignaturaDocente) => asignaturaDocente.docentes)
  asignaturasDocente: AsignaturaDocente[];

  @OneToMany(() => Schedule, (schedule) => schedule.docente)
  schedules: Schedule[];
}
// comando entidad completa
// nest g res nombreModulo --no-spec