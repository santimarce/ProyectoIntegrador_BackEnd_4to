import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const config = new DocumentBuilder()
    .setTitle('Backend gestión de horarios (Crud e interacción BD)')
    .setDescription('Interacción entre BD y BE para consumo del backend y el modulo de creación')
    .setVersion('1.0')
    .addTag('horarios') // Puedes agregar etiquetas para agrupar tus endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
