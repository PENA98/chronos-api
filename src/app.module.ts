import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { CollectionModule } from './collection/collection.module';
import { CollectionItemModule } from './collectionItem/collectionItem.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://chronosEntity98:JglXmAoVgZdDviGj@cluster0.arkkp.mongodb.net/chronosDB?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    CollectionModule,
    CollectionItemModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
