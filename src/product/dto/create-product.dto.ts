import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ example: 'Aguá' })
    nome: string;
    @ApiProperty({ example: '3928y423984y05705867052' })
    codigo_barras: string;
    @ApiProperty({ example: '10' })
    quantidade: number;
    @ApiProperty({ example: '10.00' })
    preco: number;
}
