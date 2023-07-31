
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
    id?: Nullable<number>;
}

export interface BookEntity {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): BookEntity[] | Promise<BookEntity[]>;
    findBookById(bookId: string): Nullable<BookEntity> | Promise<Nullable<BookEntity>>;
}

export interface IMutation {
    deleteBookById(bookId: string): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(bookId: string, updateBookArgs: AddBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
