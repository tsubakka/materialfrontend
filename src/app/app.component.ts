import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  @ViewChild('sidenav') sidenav: any;
  title = 'material frontend app';
  sidenavMini: boolean;

  ngOnInit() {
    this.sidenavMini = false;
  }

  onToggle() {
    console.log('toggle');
    this.sidenav.toggle();

  }
}
