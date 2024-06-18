import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { CatalogoModule } from './modules/catalogo/catalogo.module';
import { StudentModule } from './modules/student/student.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { CourseModule } from './modules/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturasModule } from './modules/asignaturas/asignaturas.module';
import { MallacurricularModule } from './modules/mallacurricular/mallacurricular.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({         // cadena de conexión a la base de datos de postgres, modificar si hace falta
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'santi018',
      database: 'Modelo_Horarios_G4_3AV_Final',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // solo activar si las tablas no existen
      dropSchema: false   // no activar, borra toda la base y la crea de cero
    }),
    TaskModule, TeachersModule, CatalogoModule, StudentModule, ScheduleModule, CourseModule, AsignaturasModule, MallacurricularModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
