import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
navLinks= [
  {path: 'home', label: 'Accueil', link: 'home'},
  {path: 'about', label: 'A propos de ...', link: 'about'},
  {path: 'projects', label: 'Projets', link: 'projects'},
  {path: 'contact', label: 'Contact', link: 'contact'},
];
  mobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile()
  }

  isMobile() {
    if (window.innerWidth < 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
