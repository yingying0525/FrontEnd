import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock-manager/stock-manager.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stock = new Stock(1, '第一只股票', 1.99, 2.5, '这是第一只股票的描述', ['IT', '互联网']);
    this.stock.id = this.activatedRoute.snapshot.params['id'];
  }

}
