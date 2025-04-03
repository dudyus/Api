/*
  Warnings:

  - You are about to drop the `filmes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `filmes`;

-- CreateTable
CREATE TABLE `viagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destino` VARCHAR(40) NOT NULL,
    `transporte` ENUM('TERRESTRE', 'MARITIMO', 'AEREO') NOT NULL DEFAULT 'TERRESTRE',
    `dataSaida` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `preco` DECIMAL(7, 2) NOT NULL,
    `duracao` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
