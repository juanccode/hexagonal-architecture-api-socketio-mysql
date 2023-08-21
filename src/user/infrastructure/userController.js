import { UserService } from "../application/userService.js";
import { UserRepositoryImplement } from "./userRepositoryImplement.js";

export class UserController {
  constructor() {
    this.userService = new UserService(new UserRepositoryImplement());
  }

  /*----------  SOCKET  ----------*/
  async findByIdUser(io, socket, data) {
    try {
      const { id } = data;
      const user = await this.userService.findById(id);
      if (user) {
        io.emit("server:success", user);
      } else {
        socket.emit("server:error", { msg: "User not found" });
      }
    } catch (error) {
      socket.emit("server:error", { msg: error.message });
    }
  }
  async findAllUser(io, socket, data) {
    try {
      const users = await this.userService.findAll();
      io.emit("server:success", users);
    } catch (error) {
      socket.emit("server:error", { msg: error.message });
    }
  }
  async createUser(io, socket, data) {
    try {
      const { name, email } = data;
      const user = await this.userService.create(name, email);
      io.emit("server:success", {
        ...user,
        msg: "Created",
      });
    } catch (error) {
      socket.emit("server:error", { msg: error.message });
    }
  }
  async editUser(io, socket, data) {
    try {
      const { id, name, email } = data;
      const user = await this.userService.update(id, name, email);
      io.emit("server:success", {
        ...user,
        msg: "Updated",
      });
    } catch (error) {
      socket.emit("server:error", { msg: error.message });
    }
  }
  async deleteUser(io, socket, data) {
    try {
      const { id } = data;
      await this.userService.delete(id);
      io.emit("server:success", {
        msg: "Deleted",
      });
    } catch (error) {
      socket.emit("server:error", { msg: error.message });
    }
  }

  /*----------  ENDPOINT  ----------*/
  async index(req, res) {
    const users = await this.userService.findAll();
    res.json(users);
  }

  async show(req, res) {
    const id = req.params.id;
    const user = await this.userService.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  async create(req, res) {
    try {
      const { io } = req;
      const { name, email } = req.body;
      const user = await this.userService.create(name, email);
      io.emit("server:success", {
        ...user,
        msg: "Created",
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const user = await this.userService.update(id, name, email);
    res.json(user);
  }

  async delete(req, res) {
    const id = req.params.id;
    await this.userService.delete(id);
    res.status(204).end();
  }
}
