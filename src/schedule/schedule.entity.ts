import { Column, Entity } from "typeorm";

@Entity({name:'horario'})
class Schedule{
    @Column()
    id: string;
    @Column()
    horainicio: Date; //modificar q sea solo la hora
    @Column()
    horafin: Date; //modificar q sea solo la hora
    @Column()
    iddocente: number;
    @Column()
    idcurso: number; 
    @Column()   
    idasignatura: number;
    @Column()
    iddia: number;
}