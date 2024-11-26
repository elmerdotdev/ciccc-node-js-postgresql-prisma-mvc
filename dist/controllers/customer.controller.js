"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCustomer = exports.modifyCustomer = exports.addCustomer = exports.fetchCustomerById = exports.fetchAllCustomers = void 0;
const customer_model_1 = require("../models/customer.model");
// Get all customers
const fetchAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield (0, customer_model_1.getAllCustomers)();
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
});
exports.fetchAllCustomers = fetchAllCustomers;
// Get a customer by ID
const fetchCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const customer = yield (0, customer_model_1.getCustomerById)(id);
        if (!customer) {
            res.status(404).json({ error: 'Customer not found' });
            return;
        }
        res.status(200).json(customer);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch customer' });
    }
});
exports.fetchCustomerById = fetchCustomerById;
// Create a new customer
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age, email, bdate } = req.body;
        const newCustomer = yield (0, customer_model_1.createCustomer)({ firstname, lastname, age, email, bdate });
        res.status(201).json(newCustomer);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create customer' });
    }
});
exports.addCustomer = addCustomer;
// Update a customer
const modifyCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const { firstname, lastname, age, email, bdate } = req.body;
        const updatedCustomer = yield (0, customer_model_1.updateCustomer)(id, { firstname, lastname, age, email, bdate });
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update customer' });
    }
});
exports.modifyCustomer = modifyCustomer;
// Delete a customer
const removeCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedCustomer = yield (0, customer_model_1.deleteCustomer)(id);
        res.status(200).json(deletedCustomer);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete customer' });
    }
});
exports.removeCustomer = removeCustomer;
