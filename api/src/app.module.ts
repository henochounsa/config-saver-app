import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { ConfigModule } from '@nestjs/config';
import { QrcodeModule } from './qrcode/qrcode.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigsModule,
    QrcodeModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
    }),
    MongooseModule.forRoot(`${process.env.DB_URI}/${process.env.DB_NAME}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
