import { Router } from 'express';
import { handleCreateContact, handleGetAllContacts } from '../controllers/contact.controller';
import { protectRoute } from '../middlewares/auth.middleware';

const contactRouter = Router();

// Ziyaretçi mesaj bırakır
contactRouter.post('/', handleCreateContact);

// Admin tüm mesajları görür
contactRouter.get('/', protectRoute, handleGetAllContacts);

export default contactRouter;
