import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {
  }

  get articles$() {
    return of<Article[]>([
      { title: 'Title 1', body: 'Lorem ipsum dolor sit amet consectetur adipiscing', slug: 'title-1' },
      { title: 'Title 2', body: 'Lorem ipsum dolor sit amet consectetur adipiscing', slug: 'title-2' }
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string): Observable<Article> {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
  }
}
