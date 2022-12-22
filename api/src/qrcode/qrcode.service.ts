import { Injectable } from '@nestjs/common';
import { CreateConfigDto } from '../configs/dto/create-config.dto';

import * as qrcode from 'qrcode';
import * as JSZip from 'jszip';

@Injectable()
export class QrcodeService {
  generate(data: CreateConfigDto[]): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      const generated = await Promise.all(
        data.map(async (conf: CreateConfigDto) => {
          const qr = await qrcode.toString(conf.id, { type: 'svg' });
          return { qr, name: conf.id };
        }),
      );
      const zip = new JSZip();
      //const img = zip.folder('images');
      try {
        for (const config of generated) {
          zip.file(`${config.name}.svg`, config.qr);
        }
        zip
          .generateAsync({ type: 'nodebuffer', streamFiles: true })
          .then((buffer) => resolve(buffer));
      } catch (err) {
        reject(err);
      }
    });
  }
}
