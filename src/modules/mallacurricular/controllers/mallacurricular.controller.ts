import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MallacurricularService } from '../services/mallacurricular.service';

@Controller('mallacurricular')
export class MallacurricularController {
  constructor(private readonly mallacurricularService: MallacurricularService) { }

  /*@Post()
  create(@Body() createMallacurricularDto: CreateMallacurricularDto) {
    return this.mallacurricularService.create(createMallacurricularDto);
  }*/

  @Get()
  findAll() {
    return this.mallacurricularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mallacurricularService.findOne(id);
  }
  /*
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMallacurricularDto: UpdateMallacurricularDto) {
      return this.mallacurricularService.update(+id, updateMallacurricularDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.mallacurricularService.remove(+id);
    }*/
}
