import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigsModule,
    QrcodeModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
