import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Collection, createCollectionInput } from './collection.schema';
import { CollectionService } from './collection.service';
import { createWriteStream } from 'fs';
import path from 'path';

@Resolver()
export class CollectionResolver {
  constructor(private collectionService: CollectionService) {} // <-- inject the service

  @Query(() => [Collection]) // <-- what the query will return
  async collections() {
    // <-- query name
    return this.collectionService.findAll(); // <-- resolve the query
  }

  @Query(() => [Collection]) // <-- what the query will return
  async getUserCollections(@Args('userID') userID: string) {
    // <-- query name
    return this.collectionService.findUserCollections(userID); // <-- resolve the query
  }

  @Query(() => Collection)
  async collection(id: string) {
    return this.collectionService.findById(id);
  }

  @Mutation(() => Collection) // <-- what the mutation will receive
  async createCollection(
    @Args('createCollectionInput') createCollectionInput: createCollectionInput,
  ) {
    // <-- mutation name
    return this.collectionService.createCollection(createCollectionInput); // <-- resolve the mutation
  }

  @Mutation(() => String)
  async uploadFile(parent, { file }) {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const stream = createReadStream();
    const pathName = path.join(__dirname, `/public/images/${filename}`);
    await stream.pipe(createWriteStream(pathName));
    return `http://localhost:3000/images/${filename}`;
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
