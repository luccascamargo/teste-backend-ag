-- Cria a tabela de produtos
CREATE TABLE IF NOT EXISTS products (
    codigo Int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(500) NOT NULL,
    codigo_barras VARCHAR(255) NOT NULL,
    quantidade DECIMAL(10, 2) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);