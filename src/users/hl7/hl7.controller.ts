import * as rawbody from 'raw-body';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus, createParamDecorator } from '@nestjs/common';
import { Hl7Service } from './hl7.service';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { Request, Response, text } from 'express';
import { PlainBody } from './post.decorator';
@Controller('hl7')

export class Hl7Controller {
  constructor(private readonly hl7Service: Hl7Service) {}

  @Post()
  async create(@PlainBody() text) {
    return this.hl7Service.create(text);
  }
    
  

  @Get()
  findAll() {
    return this.hl7Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hl7Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHl7Dto: UpdateHl7Dto) {
    return this.hl7Service.update(+id, updateHl7Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hl7Service.remove(+id);
  }
}
