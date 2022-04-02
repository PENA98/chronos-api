import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Collection } from './collection.schema';
import { CollectionService } from './collection.service'; 

@Resolver()
export class CollectionResolver {
  constructor(private collectionService: CollectionService) {} // <-- inject the service

  @Query(() => [Collection]) // <-- what the query will return
  async collections() { // <-- query name
    return this.collectionService.findAll(); // <-- resolve the query
  }

  @Query(() => Collection) 
  async collection(id: string) {
    return this.collectionService.findById(id);
  }

  @Mutation(() => Collection) // <-- what the mutation will receive
  async createCollection(collection: Collection) { // <-- mutation name
    return this.collectionService.createCollection(collection); // <-- resolve the mutation
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
