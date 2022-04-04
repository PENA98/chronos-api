import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppService } from './app.service';
import { join } from 'path';
import { CollectionModule } from './collection/collection.module';
import { CollectionItemModule } from './collectionItem/collectionItem.module';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
