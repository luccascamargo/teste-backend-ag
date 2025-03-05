import {
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Delete,
    Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Produtos')
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um produto' })
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ summary: 'Buscar todos os produtos' })
    findAll() {
        return this.productService.findAll();
    }

    @Get(':codigo')
    @ApiParam({ name: 'codigo', description: 'Codigo do usuário' })
    @ApiOperation({ summary: 'Buscar um produto pelo codigo' })
    findOne(@Param('codigo') codigo: string) {
        return this.productService.findOne(+codigo);
    }

    @Patch(':codigo')
    @ApiParam({ name: 'codigo', description: 'Codigo do usuário' })
    @ApiOperation({ summary: 'Editar um produto' })
    update(
        @Param('codigo') codigo: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.update(+codigo, updateProductDto);
    }

    @Delete(':codigo')
    @ApiParam({ name: 'codigo', description: 'Codigo do usuário' })
    @ApiOperation({ summary: 'Deletar um produto' })
    remove(@Param('codigo') codigo: string) {
        return this.productService.remove(+codigo);
    }
}
