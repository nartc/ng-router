import { Routes } from '@angular/router';
import { ArticlesGuard } from '../guards/articles.guard';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

export const articlesRoutes: Routes = [
  { path: '', component: ArticleListComponent }, // articles/
  {
    path: ':slug',
    children: [
      { path: '', component: ArticleDetailComponent },
      // { path: 'edit', component: ArticleDetailEditComponent}
    ]
  }
];
