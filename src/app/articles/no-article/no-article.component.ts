import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-article',
  template: `
    <p>
      No article found
    </p>
  `,
  styles: [
  ]
})
export class NoArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
