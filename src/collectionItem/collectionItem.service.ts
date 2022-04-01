import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionItem, createCollectionItemInput } from './collectionItem.schema';

@Injectable()
export class CollectionItemService {

  collectionItems: Partial<CollectionItem>
  constructor(
    @InjectModel(CollectionItem.name) private collectionItemModel: Model<CollectionItem>,
  ) {
    // this.collectionItems = collectionItems
  }

  async findAll() {
    return this.collectionItemModel.find().lean();
  }

  async findById(id: string) {}

  async createCollectionItem(collectionItem: createCollectionItemInput) {}

  async updateCollectionItem(collectionItem: createCollectionItemInput) {}
}
