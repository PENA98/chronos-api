import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import path from 'path';
import fs from 'fs';
import { Model } from 'mongoose';
import {
  Collection,
  CollectionDocument,
  createCollectionInput,
  updateCollectionInput,
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
  
  async findUserCollections(userID: string) {
    return this.collectionModel.find({ userID: userID }).lean();
  }

  async findById(id: string) {
    return this.collectionModel.findById(id).lean();
  }

  async createCollection(collection: createCollectionInput) {
    
    const createdCollection = new this.collectionModel(collection);
    return createdCollection.save();
  }

  async updateCollection(collection: updateCollectionInput) {
    return this.collectionModel.updateOne({ _id: collection._id }, collection);
  }

  async deleteCollection(id: string) {
    return this.collectionModel.deleteOne({ _id: id });
  }
}
