<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231215105007 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pokemon (id INT AUTO_INCREMENT NOT NULL, tipo_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, number INT NOT NULL, INDEX IDX_62DC90F3A9276E6C (tipo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pokemon_user (pokemon_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_B13AA80A2FE71C3E (pokemon_id), INDEX IDX_B13AA80AA76ED395 (user_id), PRIMARY KEY(pokemon_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, trainer_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_C4E0A61FFB08EDF6 (trainer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team_pokemon (team_id INT NOT NULL, pokemon_id INT NOT NULL, INDEX IDX_9DA5E1C4296CD8AE (team_id), INDEX IDX_9DA5E1C42FE71C3E (pokemon_id), PRIMARY KEY(team_id, pokemon_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tipo (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pokemon ADD CONSTRAINT FK_62DC90F3A9276E6C FOREIGN KEY (tipo_id) REFERENCES tipo (id)');
        $this->addSql('ALTER TABLE pokemon_user ADD CONSTRAINT FK_B13AA80A2FE71C3E FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pokemon_user ADD CONSTRAINT FK_B13AA80AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61FFB08EDF6 FOREIGN KEY (trainer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE team_pokemon ADD CONSTRAINT FK_9DA5E1C4296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE team_pokemon ADD CONSTRAINT FK_9DA5E1C42FE71C3E FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pokemon DROP FOREIGN KEY FK_62DC90F3A9276E6C');
        $this->addSql('ALTER TABLE pokemon_user DROP FOREIGN KEY FK_B13AA80A2FE71C3E');
        $this->addSql('ALTER TABLE pokemon_user DROP FOREIGN KEY FK_B13AA80AA76ED395');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61FFB08EDF6');
        $this->addSql('ALTER TABLE team_pokemon DROP FOREIGN KEY FK_9DA5E1C4296CD8AE');
        $this->addSql('ALTER TABLE team_pokemon DROP FOREIGN KEY FK_9DA5E1C42FE71C3E');
        $this->addSql('DROP TABLE pokemon');
        $this->addSql('DROP TABLE pokemon_user');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP TABLE team_pokemon');
        $this->addSql('DROP TABLE tipo');
    }
}
