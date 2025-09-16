import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// App Middlewares
import { authenticateToken } from "./src/middleware/token.verify.js";
// App Routes
import UsersRoutes from "./src/modules/users/users.routes.js";
import OrdersRoutes from "./src/modules/orders/order.routes.js";
import ProductRoutes from "./src/modules/products/product.routes.js";

const app = express();
const port = 5000;

// Parse data for post put patch request
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
  // "mongodb+srv://ecommerapp:EKXiBBe5ZVmWWkD2@cluster0.lpq84nq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  "mongodb+srv://kamrankhizri4749:125@cluster0.3jksbr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// App Routes Redirect
app.use("/users", UsersRoutes);
app.use("/orders", authenticateToken, OrdersRoutes);
app.use("/product", ProductRoutes);

// server listen running function cal to run sever
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("API is running...");
});
