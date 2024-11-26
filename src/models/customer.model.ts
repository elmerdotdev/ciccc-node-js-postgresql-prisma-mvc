import { PrismaClient, Customer } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all customers
export const getAllCustomers = async (): Promise<Customer[]> => {
  return await prisma.customer.findMany();
};

// Fetch a customer by ID
export const getCustomerById = async (id: number): Promise<Customer | null> => {
  return await prisma.customer.findUnique({ where: { id } });
};

// Create a new customer
export const createCustomer = async (data: Omit<Customer, 'id'>): Promise<Customer> => {
  return await prisma.customer.create({ data });
};

// Update a customer
export const updateCustomer = async (
  id: number,
  data: Partial<Omit<Customer, 'id'>>
): Promise<Customer> => {
  return await prisma.customer.update({ where: { id }, data });
};

// Delete a customer
export const deleteCustomer = async (id: number): Promise<Customer> => {
  return await prisma.customer.delete({ where: { id } });
};