import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <ul>
      <li *ngFor="let article of articles$ | async"
          style="border: 1px solid black; padding: 20px; margin-bottom: 10px;">
        {{article.title}}
        <br>
        <a style="cursor: pointer; text-decoration: underline" (click)="onReadMoreClick(article.slug)">Read more</a>
        <a style="cursor: pointer; text-decoration: underline; margin-left: 1rem" (click)="onEditClick(article.slug)">Edit</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private readonly articleService: ArticleService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }

  onReadMoreClick(slug: string) {
    this.router.navigate(['/articles', slug]);
  }

  onEditClick(slug: string) {
    this.router.navigate(['/articles', slug, 'edit']);
  }
}
