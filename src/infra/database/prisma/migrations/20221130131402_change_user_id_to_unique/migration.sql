/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `auth_tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `auth_tokens_user_id_key` ON `auth_tokens`(`user_id`);
