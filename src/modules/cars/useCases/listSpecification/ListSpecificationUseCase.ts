import { Category } from "../../model/Category";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Category[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationUseCase };
