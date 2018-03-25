import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit() {
  }
  increment():number{
    return this.count+=1;
  }
  decrement(): number {
    return this.count-=1;
  }

}
