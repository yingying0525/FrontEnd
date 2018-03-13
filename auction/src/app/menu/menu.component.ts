import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public MenuList: Array<Menu>;

  public CurrentId: number;

  constructor(private router: Router) {
    this.router.events.filter(event => event instanceof NavigationEnd )
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/home'){
          this.CurrentId = 1;
        }else if (event.url == '/stock'){
          this.CurrentId = 2;
        }
      });
  }

  ngOnInit() {
    this.CurrentId = 1;
    this.MenuList = [
      new Menu(1, '首页', '/home'),
      new Menu(2, '股票详情', '/stock')
    ];
  }

}

export class Menu {
  constructor(public id: number, public name: string, public url: string) {}
}
