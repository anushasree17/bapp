import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { productInput } from 'src/types';
import { IProductUpdateInput } from 'src/types';
//import { deleteProduct } from './product.service'

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get() //localhost:3002/user
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  createProduct(@Body() inp: productInput) {
    return this.productService.addProduct(inp);
  }

  @Patch(':id')
  updateProduct(@Body() product: IProductUpdateInput, @Param('id') id: any) {
    return this.productService.updateProduct(id, product);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    console.log('id', id);
    return this.productService.deleteProduct(id);

  }
  
  @Get(':id') //localhost:3002/product/12hgy21
  productById(@Param('id') id: string) {
    console.log('id', id);
    return this.productService.getProductById(id);
  }
}
