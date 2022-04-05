import { Test, TestingModule } from '@nestjs/testing';
import { CollectionItemService } from './collectionItem.service';
import {
  CollectionItem,
} from './collectionItem.schema';

describe('CollectionItemService', () => {
  let service: CollectionItemService;
  const mockCollectionItem = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CollectionItem,],
      providers: [CollectionItemService],
    }).overrideProvider(CollectionItemService).useValue(mockCollectionItem).compile();

    service = module.get<CollectionItemService>(CollectionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
