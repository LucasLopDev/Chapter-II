import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const listSpecificationUsecase = new ListSpecificationUseCase(
  specificationsRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUsecase
);

export { listSpecificationController };
