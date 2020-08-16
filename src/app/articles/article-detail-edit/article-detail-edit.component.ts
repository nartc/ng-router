import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, pluck, shareReplay, switchMap, take, takeUntil } from 'rxjs/operators';
import { CheckDeactivate } from '../../check-deactivate';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail-edit',
  template: `
    <form [formGroup]="form$ | async">
      <label for="title">Title</label>
      <input type="text" id="title" formControlName="title">
      <br><br>
      <label for="body">Body</label>
      <textarea id="body" formControlName="body"></textarea>
      <br><br>
    </form>
  `,
  styles: []
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
  form$: Observable<FormGroup>;
  private initialFormValue: unknown;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.form$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article),
      switchMap(article => of(this.initForm(article))),
      shareReplay(1)
    );
  }

  checkDeactivate(): Observable<boolean> {
    let formValue = {};
    this.form$.pipe(take(1)).subscribe(form => {
      formValue = form.getRawValue();
    });
    const isEdited = JSON.stringify(this.initialFormValue) !== JSON.stringify(formValue);
    return of(!isEdited || confirm('Do you want to cancel changes?'));
  }

  private initForm(article: Article): FormGroup {
    const form = this.fb.group({
      title: [article.title],
      body: [article.body]
    });
    this.initialFormValue = form.getRawValue();
    return form;
  }
}
