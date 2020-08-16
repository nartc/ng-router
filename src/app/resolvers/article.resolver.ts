import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<Article> {
  constructor(private readonly articleService: ArticleService, private readonly router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const slug = route.params.slug;
    if (!slug) {
      this.redirectToNoArticle();
      return;
    }

    return this.articleService.getArticle(slug).pipe(
      delay(2000),
      tap(article => {
        if (!article) {
          this.redirectToNoArticle();
        }
      })
    );
  }

  private redirectToNoArticle() {
    this.router.navigate(['/articles/no-article']);
  }
}
