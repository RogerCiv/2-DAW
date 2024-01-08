<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240108122434 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE card_game (card_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_CF18332E4ACC9A20 (card_id), INDEX IDX_CF18332EE48FD905 (game_id), PRIMARY KEY(card_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_card (game_id INT NOT NULL, card_id INT NOT NULL, INDEX IDX_FD01F4FFE48FD905 (game_id), INDEX IDX_FD01F4FF4ACC9A20 (card_id), PRIMARY KEY(game_id, card_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE card_game ADD CONSTRAINT FK_CF18332E4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE card_game ADD CONSTRAINT FK_CF18332EE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_card ADD CONSTRAINT FK_FD01F4FFE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_card ADD CONSTRAINT FK_FD01F4FF4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card_game DROP FOREIGN KEY FK_CF18332E4ACC9A20');
        $this->addSql('ALTER TABLE card_game DROP FOREIGN KEY FK_CF18332EE48FD905');
        $this->addSql('ALTER TABLE game_card DROP FOREIGN KEY FK_FD01F4FFE48FD905');
        $this->addSql('ALTER TABLE game_card DROP FOREIGN KEY FK_FD01F4FF4ACC9A20');
        $this->addSql('DROP TABLE card_game');
        $this->addSql('DROP TABLE game_card');
    }
}
