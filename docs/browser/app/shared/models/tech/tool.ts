import { Category } from './category.type';

export interface Tool {
  id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
  category: Category;
}
