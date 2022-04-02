import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionItemResolver } from './collectionItem.resolver';
import { CollectionItem, CollectionItemSchema } from './collectionItem.schema';
import { CollectionItemService } from './collectionItem.service';

@Module({
  imports: [ MongooseModule.forFeature([{ name: CollectionItem.name, schema: CollectionItemSchema }]) ],
  providers: [CollectionItemResolver, CollectionItemService]
})
export class CollectionItemModule {}
