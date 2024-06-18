import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ScheduleService } from '../services/schedule.service';
import { CreateScheduleDto } from '../dto/createhorario.dto';
import { UpdateScheduleDto } from '../dto/updatehorario.dto';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @Post()
    create(@Body() createScheduleDto: CreateScheduleDto) {
        return this.scheduleService.crearSchedule(createScheduleDto);
    }

    @Get()
    findAll() {
        return this.scheduleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.scheduleService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
        return this.scheduleService.updateTeacher(id, updateScheduleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.scheduleService.remove(id);
    }
}
