import { Request, Response } from 'express';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from '../models/customer.model';

// Get all customers
export const fetchAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

// Get a customer by ID
export const fetchCustomerById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await getCustomerById(id);
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
      return
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
};

// Create a new customer
export const addCustomer = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, age, email, bdate } = req.body;
    const newCustomer = await createCustomer({ firstname, lastname, age, email, bdate });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

// Update a customer
export const modifyCustomer = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, age, email, bdate } = req.body;
    const updatedCustomer = await updateCustomer(id, { firstname, lastname, age, email, bdate });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update customer' });
  }
};

// Delete a customer
export const removeCustomer = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedCustomer = await deleteCustomer(id);
    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' });
  }
};