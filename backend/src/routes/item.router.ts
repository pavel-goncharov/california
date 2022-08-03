import {Router} from 'express';
import {ItemRoutes} from '../constants/api';
import ItemController from '../controllers/item.controller';

const itemRouter = Router();

itemRouter.post(ItemRoutes.NEW, ItemController.createItem);
itemRouter.get(ItemRoutes.ALL, ItemController.getAllItems);
itemRouter.get(ItemRoutes.ITEM, ItemController.getOneItem);

export default itemRouter;