
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Use @InputType() decorator instead of @ArgsType()
export class AddBookArgs {
  @Field()
  title: string;

  @Field((type) => Int)
  price: number;

  @Field((type) => Int, { nullable: true }) // Make the "id" field optional
  id?: string;
}



