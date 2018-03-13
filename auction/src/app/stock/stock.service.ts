import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  private stocks: Array<Stock>;
  constructor() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 2.5, '这是第一只股票的描述', ['IT', '互联网']),
      new Stock(2, '第二只股票', 2.99, 4.5, '这是第二只股票的描述', ['金融', '互联网']),
      new Stock(3, '第三只股票', 3.99, 0.5, '这是第三只股票的描述', [ '互联网']),
      new Stock(4, '第四只股票', 4.99, 3.5, '这是第四只股票的描述', ['IT', '金融']),
      new Stock(5, '第五只股票', 5.99, 1.5, '这是第五只股票的描述', ['IT', '互联网', '金融']),
    ];
  }

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number) {
    var stockTmp = this.stocks.find(stock => stock.id == id);
    if (stockTmp) {
      return stockTmp;
    }
    return new Stock(0, '', 0, 0, '', []);
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public category: Array<string>) {

  }
}
