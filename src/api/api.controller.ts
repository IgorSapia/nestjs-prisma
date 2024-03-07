import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

@Controller('api')
export class ApiController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}