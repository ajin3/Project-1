import { Body, Injectable } from '@nestjs/common';
import { text } from 'stream/consumers';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { PlainBody } from './post.decorator';

@Injectable()
export class Hl7Service {

  create(text: string) {
    console.log(text);
    return `${text} `;
  }

  findAll() {
    return `This action returns all hl7`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hl7`;
  }

  update(id: number, updateHl7Dto: UpdateHl7Dto) {
    return `This action updates a #${id} hl7`;
  }

  remove(id: number) {
    return `This action removes a #${id} hl7`;
  }
}
