// import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositories = null;
const importCategoryUsecase = new ImportCategoryUseCase(categoriesRepositories);
const importCategoryController = new ImportCategoryController(
  importCategoryUsecase
);

export { importCategoryController };
