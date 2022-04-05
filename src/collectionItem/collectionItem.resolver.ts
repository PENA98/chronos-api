import { Resolver, Query, Mutation } from '@nestjs/graphql';
import {
  CollectionItem,
  createCollectionItemInput,
} from './collectionItem.schema';
import { CollectionItemService } from './collectionItem.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

//comment the code
@Resolver()
export class CollectionItemResolver {
  constructor(private collectionItemService: CollectionItemService) {} // <-- inject the service

  @Query(() => [CollectionItem]) // <-- what the query will return
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async collectionItems() {    // <-- query name
    return this.collectionItemService.findAll(); // <-- resolve the query
  }

  @Query(() => CollectionItem)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async collectionItem(id: string) {
    return this.collectionItemService.findById(id);
  }

  @Mutation(() => CollectionItem) // <-- what the mutation will receive
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async createCollectionItem(collectionItem: createCollectionItemInput) { // <-- mutation name
    return this.collectionItemService.createCollectionItem(collectionItem); // <-- resolve the mutation
  }

  @Mutation(() => CollectionItem)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async updateCollectionItem(collectionItem: createCollectionItemInput) {
    return this.collectionItemService.updateCollectionItem(collectionItem);
  }

  @Mutation(() => CollectionItem)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async deleteCollectionItem(id: string) {
    return this.collectionItemService.deleteCollectionItem(id);
  }
}
