import { Module } from '@nestjs/common';
import { CollectionsResolver } from './collections.resolver';
import { CollectionsService } from './collections.service';

@Module({
  providers: [CollectionsResolver, CollectionsService]
})
export class CollectionsModule {}
