import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description;
}
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository };
export { ICreateCategoryDTO };
