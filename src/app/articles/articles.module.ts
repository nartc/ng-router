import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { articlesRoutes } from './articles.routes';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { NoArticleComponent } from './no-article/no-article.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, ArticleDetailEditComponent, NoArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articlesRoutes),
    ReactiveFormsModule
  ]
})
export class ArticlesModule {
}
