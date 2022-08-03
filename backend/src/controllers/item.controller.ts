import {Request, Response} from 'express';
import ItemService from '../services/item.service';
import {IMessage} from '../types/common.types';
import {IItem, IItemNewData} from '../types/item.types';

class ItemController {
  async createItem(req: Request, res: Response<IMessage>) {
    const newItemData: IItemNewData = req.body;
    const newItem: IItem = await ItemService.create(newItemData);
    const message: string = `${newItem.title} created`; 
    return res.json({message});
  }
  
  async getAllItems(req: Request, res: Response<IItem[]>) {
    const items: IItem[] = await ItemService.getAll();
    return res.json(items);
  }

  async getOneItem(req: Request, res: Response<IItem | IMessage>) {
    const id: string = req.params.id;
    const item: IItem | null = await ItemService.getOne(id);
    if(item) {
      return res.json(item);
    } else {
      const message: string = 'Item doesn\'t exist';
      return res.json({message});
    }
  }
}

export default new ItemController();