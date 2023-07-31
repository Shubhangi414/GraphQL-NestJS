
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';
import { AppResolver } from './app.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/books-db'), // Replace 'your-database-name' with the name of your MongoDB database
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'), // for code-first approach
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    BookModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
