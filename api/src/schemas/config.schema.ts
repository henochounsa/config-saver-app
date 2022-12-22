import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConfigDocument = HydratedDocument<Config>;

@Schema()
export class Config {
  @Prop()
  id: string;

  @Prop()
  secret: string;

  @Prop()
  row: [];
}

export const ConfigSchema = SchemaFactory.createForClass(Config);
