

    import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookEntity {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}