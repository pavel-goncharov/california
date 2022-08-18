import {ICategoryItem, TSortByGroup} from "src/types/landing.types";

export function sortByGroup(items: ICategoryItem[]): TSortByGroup {
  const firstGroup: ICategoryItem[] = [];
  const secondGroup: ICategoryItem[] = [];
  
  items.forEach(item => {
    if(item.group === 1) firstGroup.push(item);
    else if(item.group === 2) secondGroup.push(item);
  });
  
  return {firstGroup, secondGroup}; 
};