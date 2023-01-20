import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser$!: Observable<User | null>
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor() {
    this.currentUser$ = this.currentUser.asObservable();
   }

  setCurrentUser(currentUser: User): void {
    this.currentUser.next(currentUser);
  }

  public userIsLoggedIn(): boolean{
    return localStorage.getItem('token') ? true : false;
  }
}
