import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'factoria-postgres',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'legiao_mirim',
  user: process.env.DB_USER || 'factoria',
  password: process.env.DB_PASSWORD,
});

export default pool;

export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS categorias_doc (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome TEXT NOT NULL UNIQUE,
      ordem INT DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS documentos (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome TEXT NOT NULL,
      categoria TEXT NOT NULL,
      mes_ano TEXT,
      filename TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS albuns (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS fotos (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      album_id UUID REFERENCES albuns(id) ON DELETE CASCADE,
      nome TEXT NOT NULL,
      filename TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    -- Categorias padrão
    INSERT INTO categorias_doc (nome, ordem) VALUES
      ('Estatuto Social', 1),
      ('Ata de Eleição', 2),
      ('Convênio', 3),
      ('Relatório Financeiro', 4),
      ('Outro', 99)
    ON CONFLICT DO NOTHING;

    -- Álbuns padrão
    INSERT INTO albuns (nome) VALUES
      ('Conheça a Entidade'),
      ('Atividades')
    ON CONFLICT DO NOTHING;
  `);
}
