import { Module } from '@nestjs/common';
import { SeedService } from './seed/seed.service';
import { DatabaseService } from './database/database.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/env.validation';

@Module({
    imports: [
        ProductModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validate: validateEnv,
        }),
    ],
    controllers: [],
    providers: [SeedService, DatabaseService],
})
export class AppModule {}
