import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
    private connection: mysql.Connection;

    async getConnection(): Promise<mysql.Connection> {
        if (!this.connection) {
            this.connection = await mysql.createConnection({
                host: process.env.DB_HOST ?? '127.0.0.1',
                user: process.env.DB_USER ?? 'root',
                port: parseInt(process.env.DB_PORT, 10) ?? 3306,
                password: process.env.DB_PASSWORD ?? 'admin',
            });
        }
        await this.connection.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
        );

        await this.connection.changeUser({ database: process.env.DB_NAME });

        return this.connection;
    }
}
