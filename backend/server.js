const colors = require("colors");
const dotenv = require("dotenv");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookie = require("cookie-parser");

const connectDb = require("./utils/db.js");
const { notFound, errorHandler } = require("./middleware/errorHandler.js");
const userRoutes = require("./routers/userRoutes.js");

dotenv.config();

connectDb();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests = require( this IP, please try again in an hour!",
});

app.use("/api", limiter);
app.use(express.json());
app.use(cookie());

// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io;
  next();
});

app.use("/api/chats", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve(), "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
