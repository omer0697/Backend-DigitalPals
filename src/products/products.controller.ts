import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: number): Promise<Product> {
        return this.productService.getProductById(id);
    }

    
    // according to id it will update the product
    @Put(':id')
    updateProductPinned(@Param('id') id: number, @Body('pinned') pinned: boolean, @Body('position') position: number): Promise<Product> {
        return this.productService.updateProductPinned(id, pinned, position);
    }
    
    @Post()
    createProduct(@Body() product: Product): Promise<Product> {
        return this.productService.createProduct(product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): Promise<void> {
        return this.productService.deleteProduct(id);
    }
}