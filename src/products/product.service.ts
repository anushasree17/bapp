import { IProductUpdateInput, product, productInput } from 'src/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productList: product[] = [
    {
      pId: '001',
      pName: 'Pens',
      price: 10,
    },
    {
      pId: '002',
      pName: 'Pencils',
      price: 5,
    },
    {
      // eslint-disable-next-line prettier/prettier
      pId: '16D',
      pName: 'Eraser',
      price: 5,
    },
  ];
  

  getAllProducts(): product[] {
    return this.productList;
  }

  addProduct(product1: productInput) {
    this.productList.push({ pId: new Date().toISOString(), ...product1 });
  }

  updateProduct(pId: any, productUpdate: IProductUpdateInput) {
    const indexToUpdate = this.productList.findIndex(
      (product) => product.pId == pId,
    );
    if (indexToUpdate >= 0) {
      let newProduct = this.productList[indexToUpdate];
      newProduct = {
        ...newProduct,
        ...productUpdate,
      };
      this.productList[indexToUpdate] = newProduct;
      return newProduct;
    }
  }

  deleteProduct(pId: any) {
    // const indexToUpdate = this.product.findIndex(
    //   (product) => product.pId == pId,
    // );
    this.productList = this.productList.filter((product) => product.pId != pId);
    return pId;
  }

  getProductById(pId: any) {
    const indexToUpdate = this.productList.findIndex(
      (product) => product.pId == pId);
    if (indexToUpdate >= 0) {
      return this.productList[indexToUpdate];
}
    return null;
  }

}