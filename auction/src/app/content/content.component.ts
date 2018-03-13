import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public title: string;
  public desc: string;

  constructor(private router: Router) {
    this.router.events.filter(event => event instanceof NavigationEnd )
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/home'){
          this.title = '主页';
          this.desc = '主页描述';
        }else if (event.url == '/stock'){
          this.title = '股票信息';
          this.desc = '股票信息描述';
        }
      });
  }

  ngOnInit() {

  }

}
