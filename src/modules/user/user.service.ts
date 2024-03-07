import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async getUsers() {
    const users = await this.repository.getUsers({});
    return users;
  }
}