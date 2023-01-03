import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  opened: boolean = true;

  toggleSidenav(): void {
    this.opened = !this.opened
  }

  constructor() { }

  ngOnInit(): void {
  }

}
