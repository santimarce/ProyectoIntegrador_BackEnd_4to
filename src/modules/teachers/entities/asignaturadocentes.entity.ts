import { Asignatura } from 'src/modules/asignaturas/entities/asignatura.entity';
import { Teacher } from './teachers.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity('asignatura_docente', { schema: 'public' })
export class AsignaturaDocente {

    @PrimaryGeneratedColumn('increment')
    id_asign_docente: number;

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.asignaturasDocente)
    @JoinColumn({
        name: 'id_asignatura',
    })
    asignaturas: Asignatura;

    @ManyToOne(() => Teacher, (docente) => docente.asignaturasDocente)
    @JoinColumn({
        name: 'id_docente',
    })
    docentes: Teacher;
}
