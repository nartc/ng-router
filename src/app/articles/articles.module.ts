import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { articlesRoutes } from './articles.routes';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articlesRoutes)
  ]
})
export class ArticlesModule {
}
