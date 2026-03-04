import pool from './db.js';

export async function initDatabase() {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      descricao TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela tasks verificada/criada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar tabela:', error.message);
    process.exit(1);
  }
}