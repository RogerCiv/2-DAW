<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240112112733 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game ADD player2_id INT DEFAULT NULL, ADD player1_card_picked_id INT DEFAULT NULL, ADD player2_card_picked_id INT DEFAULT NULL, ADD state SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318CD22CABCD FOREIGN KEY (player2_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C155D07FD FOREIGN KEY (player1_card_picked_id) REFERENCES card (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C3C95B30F FOREIGN KEY (player2_card_picked_id) REFERENCES card (id)');
        $this->addSql('CREATE INDEX IDX_232B318CD22CABCD ON game (player2_id)');
        $this->addSql('CREATE INDEX IDX_232B318C155D07FD ON game (player1_card_picked_id)');
        $this->addSql('CREATE INDEX IDX_232B318C3C95B30F ON game (player2_card_picked_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318CD22CABCD');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C155D07FD');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C3C95B30F');
        $this->addSql('DROP INDEX IDX_232B318CD22CABCD ON game');
        $this->addSql('DROP INDEX IDX_232B318C155D07FD ON game');
        $this->addSql('DROP INDEX IDX_232B318C3C95B30F ON game');
        $this->addSql('ALTER TABLE game DROP player2_id, DROP player1_card_picked_id, DROP player2_card_picked_id, DROP state');
    }
}
