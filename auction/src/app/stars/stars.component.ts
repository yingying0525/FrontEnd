import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  public rating = 0;
  @Input()
  public flag = true;
  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter<number>();

  public stars: boolean[] = [];

  constructor() { }

  ngOnChanges(){
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  ngOnInit() {
  }

  setStar(num: number) {
    if ( !this.flag) {
      this.rating = num;

      this.ratingChange.emit(this.rating);
    }
  }

}
