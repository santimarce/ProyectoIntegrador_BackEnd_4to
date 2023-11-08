import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';

@Module({
  providers: [CatalogoService],
  controllers: [CatalogoController],
})
export class CatalogoModule {}
