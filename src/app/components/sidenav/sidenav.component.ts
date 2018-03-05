import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';


import { navigation } from './../../_nav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navigation: any;
  constructor() { }

  ngOnInit() {
    this.navigation = navigation;

  }


}

