import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@nx-nest-api-with-caching/typeorm-entities';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

export interface UserProps {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  createUser(user: UserProps): Observable<UserProps> {
    return from(
      this.userRepository.save({
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
      })
    );
  }
}
