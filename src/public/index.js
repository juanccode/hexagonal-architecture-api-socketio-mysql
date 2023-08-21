var socket = io();
socket.on("connect", () => {
  console.log("Conectado con Server");
});

//////// EMIT ////
/** btnFindById */
document.getElementById("btnFindById").addEventListener("click", () => {
  socket.emit("client:btnFindById", { id: 1 });
});
/** btnFindAll */
document.getElementById("btnFindAll").addEventListener("click", () => {
  socket.emit("client:btnFindAll", { });
});
/** btnCreate */
document.getElementById("btnCreate").addEventListener("click", () => {
  socket.emit("client:btnCreate", { id: 3, name: "Pablo", email: "pablo@gmail.com" });
});
/** btnEdit */
document.getElementById("btnEdit").addEventListener("click", () => {
  socket.emit("client:btnEdit", { id: 3, name: "Pablo's", email: "pablo@gmail.com" });
});
/** btnDelete */
document.getElementById("btnDelete").addEventListener("click", () => {
  socket.emit("client:btnDelete", { id: 3 });
});

//////// ON  ////
socket.on("server:success", function (payload) {
  console.log("server: ", payload);
});

socket.on("server:error", function (payload) {
  console.log("server: ", payload);
});

socket.on("disconnect", () => {
  console.log("PERDIMOS LA CONEXION");
});
