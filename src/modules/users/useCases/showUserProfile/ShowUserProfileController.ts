import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params
    const user = this.showUserProfileUseCase.execute({user_id})

    if(!user) response.status(404).json({Error: "User doesn`t exist!"})
    
    return response.status(200).json({user})
  }
}

export { ShowUserProfileController };
