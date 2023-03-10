import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

// npm i @nestjs/graphql graphql @nestjs/apollo apollo-server-express ts-morph

// For Apollo v4 (when Stable):
// npm i @nestjs/graphql graphql @nestjs/apollo @apollo/server ts-morph

// npm i class-validator class-transformer

// npx ts-node src/generate-types

// npm i @nestjs/typeorm typeorm pg

// For custom scalars:
// npm i graphql-scalars

// npm i graphql-subscriptions
// nest g module pub-sub

// Baching and Caching as well as N+1 problem solver:
// npm i dataloader

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  try {
    await app.listen(3000);
  } catch (err) {
    console.log(err);
  }
}

bootstrap().then();
