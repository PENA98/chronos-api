import { Test, TestingModule } from '@nestjs/testing';
import { CollectionItemService } from './collectionItem.service';

describe('CollectionItemService', () => {
  let service: CollectionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionItemService],
    }).compile();

    service = module.get<CollectionItemService>(CollectionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
