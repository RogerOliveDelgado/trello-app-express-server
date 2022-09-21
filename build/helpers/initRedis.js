"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const redis_1 = tslib_1.__importDefault(require("redis"));
const client = redis_1.default.createClient({
    port: 4000,
    host: "127.0.0.1",
});
client.on("connect", () => {
    console.log("Client connected to redis...");
});
client.on("ready", () => {
    console.log("Client connected to redis and ready to use...");
});
client.on("error", (err) => {
    console.log(err.message);
});
client.on("end", () => {
    console.log("Client disconnected from redis");
});
process.on("SIGINT", () => {
    client.quit();
});
exports.default = client;
//# sourceMappingURL=initRedis.js.map