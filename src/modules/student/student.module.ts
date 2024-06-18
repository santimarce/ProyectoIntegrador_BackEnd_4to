import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { CatalogoModule } from '../catalogo/catalogo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    CatalogoModule
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule { }
