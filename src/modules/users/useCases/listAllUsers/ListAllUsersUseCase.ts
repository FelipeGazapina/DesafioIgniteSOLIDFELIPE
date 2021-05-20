import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExist = this.usersRepository.findById(user_id)
    if(!userExist) throw new Error("You need be cadastrated to do this actions!")

    if(userExist.admin)
      return this.usersRepository.list()

    throw new Error("You dont have the authority to do this action!")
  }
}

export { ListAllUsersUseCase };
