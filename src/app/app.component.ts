import {Component} from '@angular/core';

@Component({
  selector: 'de-root',
  template: `
    <de-app-navbar [title]="title"></de-app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular7-app-demo';
}
