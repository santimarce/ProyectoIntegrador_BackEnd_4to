import { Column, Entity } from "typeorm";

@Entity({name:'curso'})
class Course{
    @Column()
    id_curso: string;
    @Column()
    nombre_curso: string;
    @Column()
    capacidad_curso: number;
    @Column()
    id_tipoaula: number;
}
