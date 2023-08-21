import { app, server, io } from "./app.js";
// const Socket = require("./socket/index");
// const routerApi = require("./routes");
// require("dotenv").config();
import "dotenv/config.js";

// Socket
// Socket(io);

// Router
// routerApi(app);

// INICIANDO EL SERVER
server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server on port ${process.env.SERVER_PORT}`);
});

export default app;