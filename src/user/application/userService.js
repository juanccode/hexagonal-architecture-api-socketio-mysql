import { User } from '../domain/user.js';

export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findAll() {
    const rows = await this.userRepository.findAll();
    return rows.map(row => new User(row.id, row.name, row.email));
  }

  async findById(id) {
    const row = await this.userRepository.findById(id);
    if (row) {
      return new User(row.id, row.name, row.email);
    }
    return null;
  }

  async create(name, email) {
    const id = await this.userRepository.create(name, email);
    return new User(id, name, email);
  }

  async update(id, name, email) {
    await this.userRepository.update(id, name, email);
    return new User(id, name, email);
  }

  async delete(id) {
    await this.userRepository.delete(id);
  }
}