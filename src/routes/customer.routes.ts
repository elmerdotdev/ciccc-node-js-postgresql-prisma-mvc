import { Router } from 'express';
import {
  fetchAllCustomers,
  fetchCustomerById,
  addCustomer,
  modifyCustomer,
  removeCustomer,
} from '../controllers/customer.controller';

const router = Router();

router.get('/', fetchAllCustomers); // Get all customers
router.get('/:id', fetchCustomerById); // Get a customer by ID
router.post('/', addCustomer); // Create a new customer
router.put('/:id', modifyCustomer); // Update a customer
router.delete('/:id', removeCustomer); // Delete a customer

export default router;