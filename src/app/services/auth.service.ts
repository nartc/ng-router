import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  get currentUser() {
    return of({ username: 'chau', articles: ['title-1', 'title-3'] });
  }
}
