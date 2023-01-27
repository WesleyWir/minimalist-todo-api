-- CreateTable
CREATE TABLE `todos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('todo', 'in_progress', 'complete') NULL DEFAULT 'todo',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `todos` ADD CONSTRAINT `todos_list_id_fkey` FOREIGN KEY (`list_id`) REFERENCES `lists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
