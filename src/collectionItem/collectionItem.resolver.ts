import { Resolver, Query, Mutation } from '@nestjs/graphql';
import {
  CollectionItem,
  createCollectionItemInput,
} from './collectionItem.schema';
import { CollectionItemService } from './collectionItem.service';

//comment the code
@Resolver()
export class CollectionItemResolver {
  constructor(private collectionItemService: CollectionItemService) {}

  @Query(() => [CollectionItem]) // <-- what the query will return
  async collectionItems() {
    // <-- query name
    return this.collectionItemService.findAll(); // <-- resolve the query
  }

  @Query(() => CollectionItem)
  async collectionItem(id: string) {
    return this.collectionItemService.findById(id);
  }

  @Mutation(() => CollectionItem)
  async createCollectionItem(collectionItem: createCollectionItemInput) {
    return this.collectionItemService.createCollectionItem(collectionItem);
  }

  @Mutation(() => CollectionItem)
  async updateCollectionItem(collectionItem: createCollectionItemInput) {
    return this.collectionItemService.updateCollectionItem(collectionItem);
  }

  @Mutation(() => CollectionItem)
  async deleteCollectionItem(id: string) {
    return this.collectionItemService.deleteCollectionItem(id);
  }
}
