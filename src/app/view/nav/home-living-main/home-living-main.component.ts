import { HostListener, Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";

@Component({
  selector: 'app-home-living-main',
  templateUrl: './home-living-main.component.html',
  styleUrls: ['./home-living-main.component.css']
})
export class HomeLivingMainComponent implements OnInit {

  public mobile: boolean;
  public numberOfPages: Array<Number>;
  public currentPage: number;
  public newGroups;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.fetchData();
  }

  async fetchData() {
    //rxjs(subscribe)// promise -> async await
    let result = await this.http.get<Item[]>(this.baseUrl + 'api/values').pipe(delay(1000)).toPromise();
    this.newGroups = this.parseInputArrayToGroups(result);
    this.numberOfPages = Array(Object.keys(this.newGroups).length).fill(1).map((x, i) => i + 1);

  }


  ngOnInit() {
    this.mobile = this.checkWindowScreenWidth();
    this.currentPage = 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = this.checkWindowScreenWidth();
    this.currentPage = 1;
    this.fetchData();

  }

  checkWindowScreenWidth() {
    if (window.screen.width <= 576) {
      this.mobile = true;
      return true;
    } else {
      return false;
    }
  }

  parseInputArrayToGroups(items) {
    let numberOfSplit = 24;

    if (this.mobile == true) {
      numberOfSplit = 12;
    }
    var newGroups = {};
    var start = 0;
    var key = 1;

    for (let i = numberOfSplit; i < items.length; i = i + numberOfSplit) {
      newGroups[key] = items.slice(start, i)
      start = i;
      key++;

    }

    newGroups[key] = items.slice(start, items.length);
    return newGroups;
  }

  getCurrentShowingItems() {
    return this.newGroups[this.currentPage];
  }

  nextPage() {
    if (this.currentPage < this.numberOfPages.length) {
      this.currentPage = this.currentPage + 1;
    }

  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }

  }

  jumpPage(numberOfPage) {
    this.currentPage = numberOfPage;
  }

}

interface Item {
  title: string;
  originalPrice: number;
  currentPrice: number;
  titleImageDir: number;
}
