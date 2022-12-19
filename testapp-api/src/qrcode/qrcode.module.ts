import { Module } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { QrcodeController } from './configs.controller';

@Module({
  controllers: [QrcodeController],
  providers: [QrcodeService],
})
export class QrcodeModule {}
