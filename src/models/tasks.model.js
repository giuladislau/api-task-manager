import pool from '../config/db.js';

/**
 * Model responsável pelo acesso direto à tabela tasks.
 * Contém apenas operações relacionadas ao banco.
 */
class TasksModel {
  static async findAll() {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ titulo, descricao }) {
    const result = await pool.query(
      `INSERT INTO tasks (titulo, descricao)
       VALUES ($1, $2)
       RETURNING *`,
      [titulo, descricao]
    );
    return result.rows[0];
  }

  static async update(id, { titulo, descricao, concluida }) {
    const result = await pool.query(
      `UPDATE tasks
       SET titulo = $1,
           descricao = $2,
           concluida = $3
       WHERE id = $4
       RETURNING *`,
      [titulo, descricao, concluida, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  }
}

export default TasksModel;