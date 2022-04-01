import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Collection,
  CollectionDocument,
  createCollectionInput,
} from './collection.schema';

@Injectable()
export class CollectionService {
  collections: Partial<Collection>;
  constructor(
    @InjectModel(Collection.name)
    private collectionModel: Model<CollectionDocument>,
  ) {
    // this.collections = collections
  }

  async findAll() {
    return this.collectionModel.find().lean();
  }

  async findById(id: string) {
    return this.collectionModel.findById(id).lean();
  }

  async createCollection(collection: createCollectionInput) {
    const createdCollection = new this.collectionModel(collection);
    return createdCollection.save();
  }

  async updateCollection(collection: createCollectionInput) {
    return this.collectionModel.updateOne({ _id: collection._id }, collection);
  }

  async deleteCollection(id: string) {
    return this.collectionModel.deleteOne({ _id: id });
  }
}
