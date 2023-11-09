import { Module } from '@nestjs/common';
import { TeachersService } from './services/teachers.service';
import { TeachersController } from './controllers/teachers.controller';

@Module({
  providers: [TeachersService],
  controllers: [TeachersController]
})
export class TeachersModule { }
