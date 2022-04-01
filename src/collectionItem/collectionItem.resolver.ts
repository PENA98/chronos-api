import { Resolver, Query } from '@nestjs/graphql';
import { CollectionItem } from './collectionItem.schema';
import { CollectionItemService } from './collectionItem.service';
@Resolver()
export class CollectionItemResolver {

    constructor(private collectionItemService: CollectionItemService) {}

    @Query(() => [CollectionItem]) // <-- what the query will return
    async collectionItems() { // <-- query name
        return this.collectionItemService.findAll(); // <-- resolve the query
    }
}
