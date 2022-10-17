import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });
    await this.repository.save(specification);
  }
  async list(): Promise<Specification[]> {
    const specification = await this.repository.find();
    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      name,
    });
    return specification;
  }
}

export { SpecificationRepository };
