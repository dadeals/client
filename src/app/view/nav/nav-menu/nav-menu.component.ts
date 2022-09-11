import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  public userName: string = "User Name";
  public wishList: string = "Wish List";
  public total: string = "Total";

  isExpanded = false;

  constructor(private router:Router) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  go() {
    // this.router.navigate(['/newscontent', hero.id]);
    this.router.navigate(['/counter','123']);
  }

}
