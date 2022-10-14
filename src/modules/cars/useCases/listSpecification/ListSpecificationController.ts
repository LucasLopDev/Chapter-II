import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUsecase: ListSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.listSpecificationUsecase.execute();
    return response.json(all);
  }
}
export { ListSpecificationController };
