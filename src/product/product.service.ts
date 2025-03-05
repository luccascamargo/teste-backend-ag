import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResultSetHeader } from 'mysql2';

@Injectable()
export class ProductService {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(creatProductDto: CreateProductDto) {
        try {
            const connection = await this.databaseService.getConnection();

            const product = await connection.query(
                `INSERT INTO products (nome, codigo_barras, quantidade, preco) VALUES (?, ?, ?, ?)`,
                [
                    creatProductDto.nome,
                    creatProductDto.codigo_barras,
                    creatProductDto.quantidade,
                    creatProductDto.preco,
                ],
            );
            return product;
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto no banco de dados.');
        }
    }

    async findAll() {
        try {
            const connection = await this.databaseService.getConnection();

            const [products] = await connection.query(
                `SELECT * FROM products;`,
            );
            return products;
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto no banco de dados.');
        }
    }

    async findOne(codigo: number) {
        try {
            const connection = await this.databaseService.getConnection();

            const [product] = await connection.query(
                `SELECT * FROM products WHERE codigo = ? LIMIT 1`,
                [codigo],
            );

            return product[0];
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto no banco de dados.');
        }
    }

    async update(codigo: number, updateProductDto: UpdateProductDto) {
        try {
            const connection = await this.databaseService.getConnection();

            const [product] = await connection.query(
                `SELECT * FROM products WHERE codigo = ?`,
                [codigo],
            );

            if (!product) {
                console.log('Produto não encontrado. Verifique o código.');
                return false;
            }

            const fieldsToUpdate = [];
            const valuesToUpdate = [];

            if (updateProductDto.nome !== undefined) {
                fieldsToUpdate.push('nome = ?');
                valuesToUpdate.push(updateProductDto.nome);
            }
            if (updateProductDto.codigo_barras !== undefined) {
                fieldsToUpdate.push('codigo_barras = ?');
                valuesToUpdate.push(updateProductDto.codigo_barras);
            }
            if (updateProductDto.quantidade !== undefined) {
                fieldsToUpdate.push('quantidade = ?');
                valuesToUpdate.push(updateProductDto.quantidade);
            }
            if (updateProductDto.preco !== undefined) {
                fieldsToUpdate.push('preco = ?');
                valuesToUpdate.push(updateProductDto.preco);
            }

            if (fieldsToUpdate.length === 0) {
                console.log('Nenhum campo válido fornecido para atualização.');
                return false;
            }

            valuesToUpdate.push(codigo);

            const query = `
                UPDATE products
                SET ${fieldsToUpdate.join(', ')}
                WHERE codigo = ?
            `;

            const [result] = await connection.query<ResultSetHeader>(
                query,
                valuesToUpdate,
            );

            if (result.affectedRows > 0) {
                console.log('Produto atualizado com sucesso!');
                return true;
            } else {
                console.log(
                    'Nenhum produto foi atualizado. Verifique os dados.',
                );
                return false;
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto no banco de dados.');
        }
    }

    async remove(id: number) {
        try {
            const connection = await this.databaseService.getConnection();

            const [product] = await connection.query(
                `DELETE FROM products WHERE codigo = ?`,
                [id],
            );

            return product;
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto no banco de dados.');
        }
    }
}
