import { Category } from './category.type';

export interface Skill {
  id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
  category: Category;
}
