import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  CanLoad
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesGuard implements CanActivate, CanActivateChild {
  constructor(private readonly authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.currentUser.pipe(map(user => !!user));
    // return of(false);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const targetSlug = childRoute.params.slug;
    if (!targetSlug) {
      return of(false);
    }
    return this.authService.currentUser.pipe(map(user => user.articles.includes(targetSlug)));
  }
}
