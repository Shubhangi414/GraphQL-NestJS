
import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookEntity } from './entity/book.entity';
import { BookService } from './book.service';
import { BookModel } from './schema/book.schema';
import { AddBookArgs } from './args/add.book.args';

@Resolver((of) => BookEntity)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [BookEntity], { name: 'books' })
  async getAllBooks(): Promise<BookModel[]> {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => BookEntity, { name: 'findBookById', nullable: true })
  async getBookById(@Args({ name: 'bookId', type: () => ID   }) id: string): Promise<BookModel | null> {
    return this.bookService.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBookById' })
  async deleteBookById(@Args({ name: 'bookId', type: () => ID }) id: string): Promise<string> {
    await this.bookService.deleteBook(id);
    return 'Book deleted successfully';
  }

  @Mutation((returns) => String, { name: 'addBook' })
  async addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): Promise<string> {
    const newBook: Partial<BookModel> = {
      title: addBookArgs.title,
      price: addBookArgs.price,
    };
    await this.bookService.addBook(newBook);
    return 'Book added successfully';
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  async updateBook(
    @Args({ name: 'bookId', type: () => ID }) id: string,
    @Args('updateBookArgs') updateBookArgs: AddBookArgs,
  ): Promise<string> {
    const updatedBook: Partial<BookModel> = {
      title: updateBookArgs.title,
      price: updateBookArgs.price,
    };
    await this.bookService.updateBook(updatedBook.id, updatedBook);
    return 'Book updated successfully';
  }
}