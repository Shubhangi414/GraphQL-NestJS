
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookModel } from './schema/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookModel.name)
    private readonly bookModel: Model<BookModel>,
  ) {}

  async addBook(book: Partial<BookModel>): Promise<string> {
    await this.bookModel.create(book);
    return 'Book added successfully';
  }

  async updateBook(id: number, updateBook: Partial<BookModel>): Promise<string> {
    await this.bookModel.findByIdAndUpdate(id, updateBook);
    return 'Book updated successfully';
  }

  async deleteBook(id: string): Promise<string> {
    await this.bookModel.deleteOne({ _id: id });
    return 'Book Deleted Successfully';
  }
// 
  async findBookById(id: string): Promise<BookModel | null> {
    return this.bookModel.findById  ({ _id: id  }).exec();
  }

  async findAllBooks(): Promise<BookModel[]> {
    return this.bookModel.find().exec();
  }
}


