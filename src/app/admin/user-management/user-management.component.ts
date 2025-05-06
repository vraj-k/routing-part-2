import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  routerState: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // not guaranteed as Angular caches the last successful navigation router state
    this.routerState = this.router.lastSuccessfulNavigation?.extras.state;
    console.log(this.routerState);
  }
}
