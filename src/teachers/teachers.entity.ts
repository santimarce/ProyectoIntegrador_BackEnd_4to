export interface Teacher {
    id_docente: string;
    nombres_docente: string;
    apellidos_docente: string;
    contacto_docente: string;
    email_docente: string;
    contrasenia_docente: string;
    id_rama: number;
    id_facultad: number;
    id_estado: number;
    id_rol: number;
  }
  
  export interface TeacherModificar extends Omit<Teacher, 'id_docente'>{
  }

