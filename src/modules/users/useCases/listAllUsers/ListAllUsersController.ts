import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.headers
    const id = user_id.toString()

    const users = this.listAllUsersUseCase.execute({user_id: id})
    if(!users) response.status(400).json({Error: "You must be a admin to do this action"})
    
    return response.status(200).json({users})
  }
}

export { ListAllUsersController };
