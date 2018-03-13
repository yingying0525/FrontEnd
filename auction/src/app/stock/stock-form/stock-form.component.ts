import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;

  constructor(private activatedRoute: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.stock = this.stockService.getStock(id);
  }

}
