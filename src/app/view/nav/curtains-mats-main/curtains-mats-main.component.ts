import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curtains-mats-main',
  templateUrl: './curtains-mats-main.component.html',
  styleUrls: ['./curtains-mats-main.component.css']
})
export class CurtainsMatsMainComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    console.log(this.route.params);

  }

  ngOnInit() {
    console.log(this.route.params);
  }

}
