import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionResolver } from './collection.resolver';
import { Collection, CollectionSchema } from './collection.schema';
import { CollectionService } from './collection.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema }])
  ],
  providers: [CollectionResolver, CollectionService]
})
export class CollectionModule {}
