import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-detail',
  template: `
    <ng-container *ngIf="article$ | async as article;else loading">
      <h1>{{article.title}}</h1>
      <p>
        {{article.body}}
      </p>
    </ng-container>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
})
export class ArticleDetailComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.article$ = this.route.data.pipe(pluck('article'));
  }

}
