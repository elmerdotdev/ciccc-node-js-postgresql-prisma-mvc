"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = require("../controllers/customer.controller");
const router = (0, express_1.Router)();
router.get('/', customer_controller_1.fetchAllCustomers); // Get all customers
router.get('/:id', customer_controller_1.fetchCustomerById); // Get a customer by ID
router.post('/', customer_controller_1.addCustomer); // Create a new customer
router.put('/:id', customer_controller_1.modifyCustomer); // Update a customer
router.delete('/:id', customer_controller_1.removeCustomer); // Delete a customer
exports.default = router;
