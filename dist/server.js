"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = __importDefault(require("./routes/customer.routes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/customers', customer_routes_1.default);
// Start the server
const PORT = 3600;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
