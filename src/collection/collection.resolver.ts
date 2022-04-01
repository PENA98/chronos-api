import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Collection } from './collection.schema';
import { CollectionService } from './collection.service';

@Resolver()
export class CollectionResolver {
  constructor(private collectionService: CollectionService) {}

  @Query(() => [Collection])
  async collections() {
    return this.collectionService.findAll();
  }

  @Query(() => Collection)
  async collection(id: string) {
    return this.collectionService.findById(id);
  }

  @Mutation(() => Collection)
  async createCollection(collection: Collection) {
    return this.collectionService.createCollection(collection);
  }

  @Mutation(() => Collection)
  async updateCollection(collection: Collection) {
    return this.collectionService.updateCollection(collection);
  }

  @Mutation(() => Collection)
  async deleteCollection(id: string) {
    return this.collectionService.deleteCollection(id);
  }
}
