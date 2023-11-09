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

@Module({
  imports: [
    TypeOrmModule.forRoot({         // cadena de conexión a la base de datos de postgres, modificar si hace falta
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Santi018',
      database: 'Modelo_Horarios_G4_3AV_Final',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TaskModule, TeachersModule, CatalogoModule, StudentModule, ScheduleModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
