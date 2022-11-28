-- AlterTable
ALTER TABLE `projects` MODIFY `status` ENUM('todo', 'in_progress', 'complete') NULL DEFAULT 'todo';
