<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240115105751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE card (id INT AUTO_INCREMENT NOT NULL, value INT NOT NULL, suit VARCHAR(7) NOT NULL, label VARCHAR(255) NOT NULL, img VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE card_game (card_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_CF18332E4ACC9A20 (card_id), INDEX IDX_CF18332EE48FD905 (game_id), PRIMARY KEY(card_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, player1_id INT NOT NULL, winner_id INT DEFAULT NULL, player2_id INT DEFAULT NULL, player1_card_picked_id INT DEFAULT NULL, player2_card_picked_id INT DEFAULT NULL, game_date_time DATETIME NOT NULL, state SMALLINT NOT NULL, INDEX IDX_232B318CC0990423 (player1_id), INDEX IDX_232B318C5DFCD4B8 (winner_id), INDEX IDX_232B318CD22CABCD (player2_id), INDEX IDX_232B318C155D07FD (player1_card_picked_id), INDEX IDX_232B318C3C95B30F (player2_card_picked_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_card (game_id INT NOT NULL, card_id INT NOT NULL, INDEX IDX_FD01F4FFE48FD905 (game_id), INDEX IDX_FD01F4FF4ACC9A20 (card_id), PRIMARY KEY(game_id, card_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE card_game ADD CONSTRAINT FK_CF18332E4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE card_game ADD CONSTRAINT FK_CF18332EE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318CC0990423 FOREIGN KEY (player1_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C5DFCD4B8 FOREIGN KEY (winner_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318CD22CABCD FOREIGN KEY (player2_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C155D07FD FOREIGN KEY (player1_card_picked_id) REFERENCES card (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C3C95B30F FOREIGN KEY (player2_card_picked_id) REFERENCES card (id)');
        $this->addSql('ALTER TABLE game_card ADD CONSTRAINT FK_FD01F4FFE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_card ADD CONSTRAINT FK_FD01F4FF4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card_game DROP FOREIGN KEY FK_CF18332E4ACC9A20');
        $this->addSql('ALTER TABLE card_game DROP FOREIGN KEY FK_CF18332EE48FD905');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318CC0990423');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C5DFCD4B8');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318CD22CABCD');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C155D07FD');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C3C95B30F');
        $this->addSql('ALTER TABLE game_card DROP FOREIGN KEY FK_FD01F4FFE48FD905');
        $this->addSql('ALTER TABLE game_card DROP FOREIGN KEY FK_FD01F4FF4ACC9A20');
        $this->addSql('DROP TABLE card');
        $this->addSql('DROP TABLE card_game');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE game_card');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
