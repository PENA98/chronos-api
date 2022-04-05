import { Test, TestingModule } from '@nestjs/testing';
import { CollectionService } from './collection.service';

describe('CollectionService', () => {
  let service: CollectionService;

  const mock = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionService],
    }).overrideProvider(CollectionService).useValue(mock).compile();

    service = module.get<CollectionService>(CollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
