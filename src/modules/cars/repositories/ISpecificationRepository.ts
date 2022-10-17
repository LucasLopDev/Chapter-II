import { Specification } from "../entities/Specification";

interface ISpecificationDTO {
  name: string;
  description;
}
interface ISpecificationRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ISpecificationDTO): Promise<void>;
}

export { ISpecificationRepository };
export { ISpecificationDTO };
