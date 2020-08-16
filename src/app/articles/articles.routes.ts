import { Routes } from '@angular/router';
import { ArticlesGuard } from '../guards/articles.guard';
import { ArticleResolver } from '../resolvers/article.resolver';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NoArticleComponent } from './no-article/no-article.component';

export const articlesRoutes: Routes = [
  { path: '', component: ArticleListComponent }, // articles/
  { path: 'no-article', component: NoArticleComponent },
  {
    path: ':slug',
    canActivateChild: [ArticlesGuard],
    children: [
      {
        path: '', component: ArticleDetailComponent, resolve: {
          article: ArticleResolver
        }
      },
      { path: 'edit', component: ArticleDetailEditComponent, canDeactivate: [ArticlesGuard] }
    ]
  }
];
