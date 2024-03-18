import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { FindOneOptions } from 'typeorm';


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async getProductById(id: number): Promise<Product> {
        const options: FindOneOptions<Product> = {
            where: { id },
            relations: ['pictures'],
        };
        return this.productRepository.findOne(options);
    }

    async createProduct(productData: Partial<Product>): Promise<Product> {
        const product = this.productRepository.create(productData);
        return this.productRepository.save(product);
    }

    async deleteProduct(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }

    async updateProductPinned(id: number, pinned: boolean, position: number): Promise<Product> {
        await this.productRepository.update(id, { pinned });
        await this.productRepository.update(id, { position });
        return this.productRepository.findOne({ where: { id } });
    }
   
}
