DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`
(
    `id`         int          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title`      varchar(255) NOT NULL,
    `content`    text         NOT NULL,
    `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP    NULL ON UPDATE CURRENT_TIMESTAMP
);