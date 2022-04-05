import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Collection, createCollectionInput, updateCollectionInput } from './collection.schema';
import { CollectionService } from './collection.service';
import { createWriteStream } from 'fs';
import path from 'path';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Resolver()
export class CollectionResolver {
  constructor(private collectionService: CollectionService) {} // <-- inject the service

  @Query(() => [Collection]) // <-- what the query will return
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async collections() {
    // <-- query name
    return this.collectionService.findAll(); // <-- resolve the query
  }

  @Query(() => [Collection]) // <-- what the query will return
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async getUserCollections(@Args('userID') userID: string) {
    // <-- query name
    return this.collectionService.findUserCollections(userID); // <-- resolve the query
  }

  @Query(() => Collection)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async collection(@Args('collectionID') id: string) {
    return this.collectionService.findById(id);
  }

  @Mutation(() => Collection) // <-- what the mutation will receive
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async createCollection(
    @Args('createCollectionInput') createCollectionInput: createCollectionInput,
  ) {
    // <-- mutation name
    return this.collectionService.createCollection(createCollectionInput); // <-- resolve the mutation
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async uploadFile(parent, { file }) {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const stream = createReadStream();
    const pathName = path.join(__dirname, `/public/images/${filename}`);
    await stream.pipe(createWriteStream(pathName));
    return `http://localhost:3000/images/${filename}`;
  }

  @Mutation(() => Collection)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async updateCollection( @Args('updateCollectionInput') updateCollectionInput: updateCollectionInput,) {
    return this.collectionService.updateCollection(updateCollectionInput);
  }

  //mutation that returns id of deleted collection

  @Mutation(() => Collection)
  @UseGuards(JwtAuthGuard) // <-- protects the query
  async deleteCollection(@Args('_id') _id: string) {
    return this.collectionService.deleteCollection(_id);
  }
}
