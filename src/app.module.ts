import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductController } from './products/product.controller';
import { ProductService } from './products/product.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, UserService, ProductService],
})
export class AppModule {}
