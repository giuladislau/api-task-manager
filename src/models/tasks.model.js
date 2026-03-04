import pool from '../config/db.js';

class TasksModel {
  static async findAll() {
    const result = await pool.query(
      'SELECT * FROM tasks ORDER BY id ASC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ titulo, descricao, concluida = false }) {
    const result = await pool.query(
      `INSERT INTO tasks (titulo, descricao, concluida)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [titulo, descricao, concluida]
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
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 RETURNING *',
      [id]
    );

    return result.rows[0];
  }
}

export default TasksModel;