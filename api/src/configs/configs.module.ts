import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { QrcodeService } from '../qrcode/qrcode.service';
import { ConfigsController } from './configs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Config, ConfigSchema } from '../schemas/config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Config.name, schema: ConfigSchema }]),
  ],
  controllers: [ConfigsController],
  providers: [ConfigsService, QrcodeService],
})
export class ConfigsModule {}
