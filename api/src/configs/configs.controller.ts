import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { QrcodeService } from '../qrcode/qrcode.service';
import type { Response } from 'express';

@Controller('configs')
export class ConfigsController {
  constructor(
    private readonly configsService: ConfigsService,
    private readonly qrcodeService: QrcodeService,
  ) {}

  @Post()
  async create(
    @Body() createConfigDto: [CreateConfigDto],
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const result = await this.configsService.create(createConfigDto);
    const buffer = await this.qrcodeService.generate(result);
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="qrcodes.zip"',
    });
    return new StreamableFile(buffer);
  }

  @Get()
  findAll() {
    return this.configsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConfigDto: UpdateConfigDto) {
    return this.configsService.update(id, updateConfigDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.configsService.delete(id);
  }
}
