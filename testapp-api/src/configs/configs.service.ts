import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Config, ConfigDocument } from '../schemas/config.schema';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import * as qrcode from 'qrcode';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectModel(Config.name) private configModel: Model<ConfigDocument>,
  ) {}

  async create(createCatDto: CreateConfigDto[]): Promise<Config[]> {
    return this.configModel.insertMany(createCatDto);
  }

  async findAll(): Promise<Config[]> {
    return this.configModel.find().exec();
  }

  async findOne(id: string): Promise<Config> {
    return this.configModel.findOne({ id });
  }

  async update(id: string, updateConfigDto: UpdateConfigDto) {
    return this.configModel.updateOne({ id }, { $set: { ...updateConfigDto } });
  }

  async delete(id: string) {
    return this.configModel.deleteOne({ id });
  }
}
