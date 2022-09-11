import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(public route: ActivatedRoute) {
    console.log(this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);
    }));

    console.log(this.route.snapshot.queryParamMap.get('id'));

  }


  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
