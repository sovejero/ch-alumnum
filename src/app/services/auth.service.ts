import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser$!: Observable<any>
  private currentUser = new BehaviorSubject<any | null>(null);

  constructor() {
    this.currentUser$ = this.currentUser.asObservable();
   }

  setCurrentUser(currentUser: any): void {
    if (currentUser?.email === 'test@test') {
      this.currentUser.next(currentUser);
      localStorage.setItem("token", "token")
    }
  }

  public userIsLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }
}
