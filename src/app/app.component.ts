import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    let path: string = window.location.hash;
    if (path && path.length > 0) {
      this.router.navigate([path.substr(2)]);
    }
  }
}
