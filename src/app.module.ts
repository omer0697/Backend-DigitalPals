import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { Picture } from './products/picture.entity';
import { PicturesController } from './products/pictures.controller';
import { ProductService } from './products/product.service';
import { PictureService } from './products/picture.service';
import { ProductController } from './products/products.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'omer9706',
        password: 'Casi.578745',
        database: 'omer_db',
        entities: [Product, Picture],
        synchronize: true,
      }
    ),
    TypeOrmModule.forFeature([Product, Picture]),
  ],
  controllers: [AppController, ProductController, PicturesController],
  providers: [AppService, ProductService, PictureService],
})
export class AppModule {}
