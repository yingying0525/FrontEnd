import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  public stocks: Array<Stock>;
  public searchInfo: FormControl = new FormControl();
  public word: string;

  constructor(private router: Router, private stockService: StockService) {
    this.searchInfo.valueChanges
      .debounceTime(500)
      .subscribe(searchWord => this.word = searchWord);
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }
  create() {
    this.router.navigateByUrl('/stock/0');
  }
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}




