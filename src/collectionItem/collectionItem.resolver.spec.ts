import { Test, TestingModule } from '@nestjs/testing';
import { CollectionItemResolver } from './collectionItem.resolver';

describe('CollectionItemResolver', () => {
  let resolver: CollectionItemResolver;

  const mockCollectionItemService = {}


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionItemResolver],
    }).overrideProvider(CollectionItemResolver).useValue(mockCollectionItemService).compile();

    resolver = module.get<CollectionItemResolver>(CollectionItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
