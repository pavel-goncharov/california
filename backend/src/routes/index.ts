import {Router} from 'express';
import {Routes} from '../constants/api';
import itemRouter from './item.router';

const router = Router();

router.use(Routes.ITEM, itemRouter);

export default router;