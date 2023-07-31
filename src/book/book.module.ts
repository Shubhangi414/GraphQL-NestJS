

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookModel, BookSchema } from './schema/book.schema'; // Import the BookModel and BookSchema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookModel.name, schema: BookSchema }]), // Add the MongooseModule with the BookModel and BookSchema
  ],
  providers: [BookService, BookResolver],
})
export class BookModule {}