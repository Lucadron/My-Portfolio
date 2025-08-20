import express from 'express';
import { getStats } from '../controllers/stats.controller';
import { protectRoute } from '../middlewares/auth.middleware';

const statsRouter = express.Router();

statsRouter.get('/', protectRoute, getStats);

export default statsRouter;
