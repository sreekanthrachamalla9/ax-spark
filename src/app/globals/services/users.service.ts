// src/app/globals/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginService } from '../api/actions/users/api-login.service';
import { SignupService } from '../api/actions/users/api-signup.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private apiLogin: LoginService,
    private apiSignup: SignupService
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.apiLogin.login({ email, password }).pipe(
      map((res: any) => ({
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        token: res.token // adjust to match your backend response
      }))
    );
  }

  signup(username: string, email: string, password: string): Observable<User> {
    return this.apiSignup.signup({ username, email, password }).pipe(
      map((res: any) => ({
        id: res.data.id,
        username: res.data.username,
        email: res.data.email
      }))
    );
  }
}
