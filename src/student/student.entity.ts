import { Column, Entity } from "typeorm";

@Entity({name:'alumno'})
class Student{
    @Column()
    id_alumno: string; 
    @Column()
    nombres_alumno: string;
    @Column()
    apellidos_alumno: string;
    @Column()
    fechanacimiento_alumno: Date | null;
    @Column()
    contacto_alumno: string;
    @Column()
    direccion_alumno: string;
    @Column()
    email_alumno: string;
    @Column()
    contrasenia_alumno: string;
    @Column()
    id_jornada: number;
    @Column()
    id_nivel: number;
    @Column()
    id_paralelo: number;
    @Column()
    id_carrera: number;
    
}