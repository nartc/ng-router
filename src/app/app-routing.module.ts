import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { ArticlesGuard } from './guards/articles.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
    data: {
      feature: 'articles',
      permissions: 'articles-read'
    },
    canActivate: [ArticlesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
