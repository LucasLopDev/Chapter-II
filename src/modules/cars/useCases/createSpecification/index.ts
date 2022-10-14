import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUsecase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUsecase
);

export { createSpecificationController };
