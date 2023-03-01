import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

// npm i @nestjs/graphql graphql @nestjs/apollo apollo-server-express ts-morph
// npm i class-validator class-transformer

// npx ts-node src/generate-types

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useGlobalPipes(new ValidationPipe());

  try {
    await app.listen(3000);
  } catch (err) {
    console.log(err);
  }
}

bootstrap().then();
