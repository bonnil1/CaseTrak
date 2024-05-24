import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); //storing static assets
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //storing templates
  app.setViewEngine('hbs'); //storing HTML output

  app.enableCors(
    {
      origin: process.env.CLIENT,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
     }
  );

  await app.listen(process.env.PORT);
}
bootstrap();
