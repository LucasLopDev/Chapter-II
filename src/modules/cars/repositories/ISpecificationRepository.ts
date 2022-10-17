import { Specification } from "../entities/Specification";

interface ISpecificationDTO {
  name: string;
  description;
}
interface ISpecificationRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ISpecificationDTO): void;
}

export { ISpecificationRepository };
export { ISpecificationDTO };
