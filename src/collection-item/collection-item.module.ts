import { Module } from '@nestjs/common';
import { CollectionItemResolver } from './collection-item.resolver';
import { CollectionItemService } from './collection-item.service';

@Module({
  providers: [CollectionItemResolver, CollectionItemService]
})
export class CollectionItemModule {}
