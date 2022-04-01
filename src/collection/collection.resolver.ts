import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CollectionResolver {

    constructor() {}

    @Query(() => String)
    async hello() {
        return 'Hello World!';
    }

}
