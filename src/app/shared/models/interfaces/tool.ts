import { Category } from '../type/category';

export interface Tool {
  id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
  category: Category;
}
