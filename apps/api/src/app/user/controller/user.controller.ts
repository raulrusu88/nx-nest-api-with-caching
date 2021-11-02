import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserProps, UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() user: UserProps): Observable<UserProps> {
    return this.userService.createUser(user);
  }
}
