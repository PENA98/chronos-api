import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { CollectionsModule } from './collections/collections.module';
import { CollectionItemModule } from './collection-item/collection-item.module';
@Module({
  imports: [
    CollectionsModule,
    MongooseModule.forRoot(
      'mongodb+srv://chronosEntity98:JglXmAoVgZdDviGj@cluster0.arkkp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    CollectionsModule,
    CollectionItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
