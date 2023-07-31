import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BookModel extends Document {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(BookModel);

