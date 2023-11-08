import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TeachersModule } from './teachers/teachers.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { StudentModule } from './student/student.module';
import { ScheduleModule } from './schedule/schedule.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [TaskModule, TeachersModule, CatalogoModule, StudentModule, ScheduleModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
