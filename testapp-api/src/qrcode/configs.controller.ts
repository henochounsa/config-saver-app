import { Controller, Get, Param } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { CreateConfigDto } from '../configs/dto/create-config.dto';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get(':id')
  create(@Param('id') data: CreateConfigDto[]) {
    return this.qrcodeService.generate(data);
  }
}
