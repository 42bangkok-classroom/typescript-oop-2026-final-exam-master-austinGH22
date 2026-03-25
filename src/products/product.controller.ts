import { Controller, Get } from "@nestjs/common";
import { ProductInterface } from "./product.interface";
import { ProductService } from "./product.service";
@Controller('products')
export class ProductController{
    constructor(private readonly producservice:ProductService){}
    @Get()
    findAll(): ProductInterface[] {
        return this.producservice.findAll();
      }
}

