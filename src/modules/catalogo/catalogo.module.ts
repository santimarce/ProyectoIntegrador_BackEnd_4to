import { Module } from '@nestjs/common';
import { CatalogoService } from './services/catalogo.service';
import { CatalogoController } from './controllers/catalogo.controller';

@Module({
  providers: [CatalogoService],
  controllers: [CatalogoController],
})
export class CatalogoModule { }
