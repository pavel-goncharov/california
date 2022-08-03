import Item from '../models/item.model';
import {IItem, IItemNewData} from '../types/item.types';

class ItemService {
  async create(item: IItemNewData): Promise<IItem> {
    const newItem: IItem = await Item.create(item);
    return newItem;
  }
  
  async getAll(): Promise<IItem[]> {
    const items: IItem[] = await Item.find();
    return items;
  }

  async getOne(id: string): Promise<IItem | null> {
    const item: IItem | null = await Item.findById(id);
    return item;
  }
}

export default new ItemService();