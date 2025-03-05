import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
    constructor(private readonly databaseService: DatabaseService) {}

    async onApplicationBootstrap() {
        await this.runSeed();
    }

    async runSeed() {
        const connection = await this.databaseService.getConnection();

        const [rows] = await connection.query(
            `SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = '${
                process.env.DB_NAME
            }' AND TABLE_NAME = 'products'`,
        );

        if (Array.isArray(rows) && rows.length === 0) {
            const schemaPath = path.join(__dirname, '..', 'schema.sql');
            const schemaSql = fs.readFileSync(schemaPath, 'utf8');

            await connection.query(schemaSql);

            await this.seedProducts(connection);
        }
    }

    async seedProducts(connection: any) {
        const products = [
            {
                nome: 'Produto 1',
                codigo_barras: '1234567890123',
                quantidade: 10,
                preco: 100.5,
            },
            {
                nome: 'Produto 2',
                codigo_barras: '1234567890124',
                quantidade: 5,
                preco: 200.75,
            },
            {
                nome: 'Produto 3',
                codigo_barras: '1234567890125',
                quantidade: 20,
                preco: 50.0,
            },
        ];

        for (const product of products) {
            await connection.query(
                `INSERT INTO products ( nome, codigo_barras, quantidade, preco) VALUES (?, ?, ?, ?)`,
                [
                    product.nome,
                    product.codigo_barras,
                    product.quantidade,
                    product.preco,
                ],
            );
        }

        console.log('Seed executado: Produtos adicionados ao banco de dados.');
    }
}
