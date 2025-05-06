import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss'],
})
export class VehicleOverviewComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // example of programmatic navigation to sibling route
  navigateToMaintenance() {
    this.router.navigate(['../maintenance'], { relativeTo: this.route });
  }
}
