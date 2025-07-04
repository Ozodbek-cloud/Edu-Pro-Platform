import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
    .setTitle('Edu Pro Platform')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('EduPro School')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_ozodbek_swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
