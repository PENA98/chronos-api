import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CollectionItem,
  CollectionItemDocument,
  createCollectionItemInput,
  updateCollectionItemInput,
} from './collectionItem.schema';

@Injectable()
export class CollectionItemService {
  collectionItems: Partial<CollectionItem>;
  constructor(
    @InjectModel(CollectionItem.name)
    private collectionItemModel: Model<CollectionItemDocument>,
  ) {
    // this.collectionItems = collectionItems
  }

  async findAll(collectionID: string) {
    return this.collectionItemModel.find({ collectionID: collectionID }).lean();
  }

  async findById(id: string) {
    return this.collectionItemModel.findById(id).lean();
  }

  async createCollectionItem(collectionItem: createCollectionItemInput) {
    const createdCollectionItem = new this.collectionItemModel(collectionItem);
    return createdCollectionItem.save();
  }

  async updateCollectionItem(collectionItem: updateCollectionItemInput) {
    return this.collectionItemModel.updateOne(
      { _id: collectionItem._id },
      collectionItem,
    );
  }

  async deleteCollectionItem(id: string) {
    return this.collectionItemModel.deleteOne({ _id: id });
  }
}
