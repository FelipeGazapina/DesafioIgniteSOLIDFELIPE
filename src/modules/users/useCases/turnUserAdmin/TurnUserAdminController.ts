import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params
    const user = this.turnUserAdminUseCase.execute({user_id})
    
    if(!user) return response.status(404).json({Error: "User doesn`t exist!"})

    return response.status(200).json({user})
  }
}

export { TurnUserAdminController };
