import { Injectable } from '@nestjs/common';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import * as HL7 from "hl7-standard";

@Injectable()
export class Hl7Service {
  create(text: string) {

    const rawData = `${text}`;

    const hl7 = new HL7(rawData);

    hl7.transform();

    const pidSegment = hl7.getSegment("PID");

    hl7.deleteSegment(pidSegment);

    const output = hl7.build();

    console.log(output);

    console.log(pidSegment);

    return `${output}`;

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
