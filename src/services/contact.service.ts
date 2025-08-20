import Contact from '../models/contact.model';
import { CreateContactInput } from '../validators/contact.validator';

export const createContact = async (data: CreateContactInput & { ipAddress?: string }) => {
    return await Contact.create(data);
};

export const getAllContacts = async () => {
    return await Contact.find().sort({ createdAt: -1 });
};
