import { Server } from 'socket.io';
import { UserController } from '../user/infrastructure/userController.js';

const userController = new UserController();

export default (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on('connection', (socket) => {
    console.log("Cliente conectado " + io.engine.clientsCount);

    socket.on('client:btnFindById', (data) => {
      userController.findByIdUser(io, socket, data);
    });
    socket.on('client:btnFindAll', (data) => {
      userController.findAllUser(io, socket, data);
    });
    socket.on('client:btnCreate', (data) => {
      userController.createUser(io, socket, data);
    });
    socket.on('client:btnEdit', (data) => {
      userController.editUser(io, socket, data);
    });
    socket.on('client:btnDelete', (data) => {
      userController.deleteUser(io, socket, data);
    });

    socket.on("disconnect", function () {
      socket.disconnect();
      console.log("Cliente desconectado");
    });

  });

  return io;
}