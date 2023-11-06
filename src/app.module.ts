import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TeachersModule } from './teachers/teachers.module';
import { CatalogoModule } from './catalogo/catalogo.module';

@Module({
  imports: [TaskModule, TeachersModule, CatalogoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
