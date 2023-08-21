import { query } from '../../infrastructure/db.js';

export class UserRepositoryImplement {
  async findAll() {
    const rows = await query('SELECT * FROM User');
    return rows;
  }

  async findById(id) {
    const rows = await query('SELECT * FROM User WHERE id = ?', [id]);
    return rows[0];
  }

  async create(name, email) {
    const result = await query('INSERT INTO User (name, email) VALUES (?, ?)', [name, email]);
    return result.insertId;
  }

  async update(id, name, email) {
    await query('UPDATE User SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  }

  async delete(id) {
    await query('DELETE FROM User WHERE id = ?', [id]);
  }
}