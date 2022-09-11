import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-homepage-slide',
  templateUrl: './homepage-slide.component.html',
  styleUrls: ['./homepage-slide.component.css']
})

export class HomepageSlideComponent  {
  public displayingCardIndex: number;
  public displayingCardActive = [true, false, false];
  subscription: Subscription;

  public cards = [
    {
      title: "Example headline.",
      describution: "test 1",
      link: "/fetch-data",
      buttonName: "Sign up today",

    },
    {
      title: "Another example headline.",
      describution: "test 2",
      link: "/fetch-data",
      buttonName: "Learn more",
    },
    {
      title: "One more for good measure.",
      describution: "test 3",
      link: "/fetch-data",
      buttonName: "Browse gallery",
    },
  ]

  constructor() {
    this.displayingCardIndex = 0;
    this.displayingCardActive = [true, false, false]
  }

  clickSlides(index: number) {
    var newdisplayingCardActive = [];
    for (let i = 0; i < 3; i++) {
      if (i == index) {
        newdisplayingCardActive.push(true);
      }
      else {
        newdisplayingCardActive.push(false);
      }

    }
    this.displayingCardActive = newdisplayingCardActive;

  }

  next() {

    if (this.displayingCardIndex + 1 > this.cards.length - 1) {
      this.displayingCardIndex = 0;
    } else {
      this.displayingCardIndex = this.displayingCardIndex + 1;
    }

    this.clickSlides(this.displayingCardIndex);
  }

  prev() {

    if (this.displayingCardIndex - 1 < 0) {
      this.displayingCardIndex = this.cards.length - 1;
    } else {
      this.displayingCardIndex = this.displayingCardIndex - 1;
    }

    this.clickSlides(this.displayingCardIndex);
  }

  ngOnInit() {
    const source = interval(10000);
    this.subscription = source.subscribe(val => this.next());

  }

  ngOnDestroy() {

    this.subscription && this.subscription.unsubscribe();
  }

}
