import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss'],
})
export class AllVehiclesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Scroll to top when component initializes
    window.scrollTo(0, 0);
  }
}
